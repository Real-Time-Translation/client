import { useRef, useState } from 'react';
import { MessageListener } from '@containers/MeetingP2PContainer/hooks/usePeerConnection/useDataChannel/interfaces';

export const useDataChannel = () => {
  const messageChannel = useRef<RTCDataChannel>();

  const [channelState, setChannelState] = useState<string>();

  const initDataChannel = (peerConnection?: RTCPeerConnection) => {
    messageChannel.current =
      peerConnection?.createDataChannel('messageChannel');
    if (messageChannel.current) {
      messageChannel.current.onopen = () => {
        setChannelState('open');
      };
    }
  };
  const startListenDataChannel = (peerConnection?: RTCPeerConnection) => {
    if (peerConnection) {
      peerConnection.ondatachannel = (e) => {
        messageChannel.current = e.channel;
        setChannelState('open');
      };
    }
  };

  const startListenMessage = (listener: MessageListener) => {
    /** Add more listeners and unsubscribtions */
    if (messageChannel.current) {
      messageChannel.current.onmessage = (e) => {
        listener(e.data);
      };
    }
  };

  const sendMessage = (message: string) => {
    try {
      messageChannel.current?.send(message);
    } catch (e) {
      console.log('error, state not open');
    }
  };

  return {
    initDataChannel,
    startListenDataChannel,
    sendMessage,
    startListenMessage,
    channelState: channelState,
  };
};
