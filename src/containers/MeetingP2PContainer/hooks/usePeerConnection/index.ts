import { useEffect, useRef, useState } from 'react';
import socket from '@api/socket';
import { STUN_SERVERS } from './constants';
import { SDPSetResult } from '@containers/MeetingP2PContainer/hooks/usePeerConnection/interfaces';
import { useDataChannel } from '@containers/MeetingP2PContainer/hooks/usePeerConnection/useDataChannel';

export const usePeerConnection = (
  meetingId: string,
  localMediaStream: MediaStream,
  handleReceiveRemoteTrackEvent: (e: RTCTrackEvent) => void,
) => {
  const peerConnection = useRef<RTCPeerConnection>();
  const [iceCandidatesBuffer, setIceCandidatesBuffer] = useState<
    RTCIceCandidate[]
  >([]);
  const {
    initDataChannel,
    startListenDataChannel,
    startListenMessage,
    sendMessage,
    channelState,
  } = useDataChannel();

  useEffect(() => {
    const canConnectionBeEstablished =
      !peerConnection.current && localMediaStream;
    if (canConnectionBeEstablished) {
      peerConnection.current = new RTCPeerConnection(STUN_SERVERS);

      setupTracks();

      peerConnection.current.onicecandidate = onIceCandidate;
      peerConnection.current.ontrack = onRemoteTrack;

      setupListeners(peerConnection.current);
    }
  }, [localMediaStream]);

  useEffect(() => {
    // send ices to answerer
    if (peerConnection.current?.remoteDescription?.type === 'answer') {
      iceCandidatesBuffer.forEach((iceCandidate) => {
        socket.emit('iceCandidate', meetingId, JSON.stringify(iceCandidate));
      });
    }
  }, [peerConnection.current?.remoteDescription]);

  const initSDPAsOfferer = async () => {
    const sdp = await peerConnection.current?.createOffer();
    await peerConnection.current?.setLocalDescription(sdp);
    return sdp;
  };

  const awareOffererAboutAnswerer = async (answererSDP: string) => {
    await peerConnection.current?.setRemoteDescription(JSON.parse(answererSDP));
  };

  const initSDPAsAnswerer = async (offererSDP: string) => {
    await peerConnection.current?.setRemoteDescription(JSON.parse(offererSDP));
    const sdp = await peerConnection.current?.createAnswer();
    await peerConnection.current?.setLocalDescription(sdp);
    return sdp;
  };

  const onIceCandidate = (e: RTCPeerConnectionIceEvent) => {
    if (peerConnection.current?.localDescription?.type === 'offer') {
      setIceCandidatesBuffer((prevState) => [
        ...prevState,
        e.candidate as RTCIceCandidate,
      ]);
    } else {
      socket.emit('iceCandidate', meetingId, JSON.stringify(e.candidate));
    }
  };

  const handleReceiveIceCandidateFromRemote = (candidate: string) => {
    if (peerConnection.current?.remoteDescription) {
      console.log('remote ICE:', candidate);
      peerConnection.current?.addIceCandidate(
        new RTCIceCandidate({
          ...JSON.parse(candidate),
          sdpMid: '0',
          sdpMLineIndex: 0,
        }),
      );
    }
  };
  const onRemoteTrack = (e: RTCTrackEvent) => {
    handleReceiveRemoteTrackEvent(e);
  };

  const setupListeners = (peerConnection: RTCPeerConnection) => {
    socket.emit('joinMeeting', meetingId);
    socket.on('answererSDPReady', async (answererSDP: string) => {
      await awareOffererAboutAnswerer(answererSDP);
    });

    socket.on('joined', async (result) => {
      if (result.sdpRole === 'offerer') {
        initDataChannel(peerConnection);
        const sdp = await initSDPAsOfferer();
        const sdpPayload: SDPSetResult = {
          sdp: JSON.stringify(sdp),
          sdpRole: 'offerer',
        };
        socket.emit('setSDP', meetingId, sdpPayload);
      }

      if (result.sdpRole === 'answerer') {
        startListenDataChannel(peerConnection);
        const offererSDP = result.offererSDP;
        const sdp = await initSDPAsAnswerer(offererSDP as string);
        const sdpPayload: SDPSetResult = {
          sdp: JSON.stringify(sdp),
          sdpRole: 'answerer',
        };
        socket.emit('setSDP', meetingId, sdpPayload);
      }
    });

    socket.on('iceCandidate', handleReceiveIceCandidateFromRemote);
  };

  const setupTracks = () => {
    localMediaStream.getTracks().forEach((track) => {
      peerConnection.current?.addTrack(track, localMediaStream);
    });
  };

  return {
    startListenDataChannelMessage: startListenMessage,
    sendDataChannelMessage: sendMessage,
    channelState,
  };
};
