import { useCallback, useEffect, useRef, useState } from 'react';
import { CAPTURE_OPTIONS } from '@containers/MeetingP2PContainer/hooks/useMediaStreem/constants';

export const useMediaStream = () => {
  const [localMediaStream, setLocalMediaStream] = useState<MediaStream>();
  const [remoteMediaStream, setRemoteMediaStream] = useState<MediaStream>();
  const localVideoElement = useRef<HTMLVideoElement>(null);
  const remoteVideoElement = useRef<HTMLVideoElement>();

  const onGetLocalMediaStream = useCallback(
    (stream: MediaStream) => {
      setLocalMediaStream(stream);
      if (localVideoElement.current) {
        localVideoElement.current.srcObject = stream;
      }
    },
    [localVideoElement.current],
  );

  const onGetLocalMediaStreamError = useCallback((e: string) => {
    console.warn('Unable to get local stream', e);
  }, []);

  const handleReceiveRemoteTrackEvent = (e: RTCTrackEvent) => {
    setRemoteMediaStream(e.streams[0]);
  };
  const remoteRefCb = useCallback(
    (videoElement: HTMLVideoElement) => {
      if (remoteMediaStream) {
        remoteVideoElement.current = videoElement;
        remoteVideoElement.current.srcObject = remoteMediaStream;
      }
    },
    [remoteMediaStream],
  );

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia(CAPTURE_OPTIONS)
      .then(onGetLocalMediaStream)
      .catch(onGetLocalMediaStreamError);
    return cleanup;
  }, []);

  const cleanup = () => {
    if (localMediaStream) {
      localMediaStream.getTracks().forEach((track) => {
        track.stop();
      });
    }
  };

  return {
    localVideoElement,
    localMediaStream,
    remoteMediaStream,
    handleReceiveRemoteTrackEvent,
    remoteRefCb,
  };
};
