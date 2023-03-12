import { useRef } from 'react';
import { MessageListener } from '@containers/MeetingP2PContainer/hooks/usePeerConnection/useDataChannel/interfaces';

export const useDataChannel = () => {
  const messageChannel = useRef<RTCDataChannel>();

  const initDataChannel = (peerConnection?: RTCPeerConnection) => {
    messageChannel.current =
      peerConnection?.createDataChannel('messageChannel');
  };
  const startListenDataChannel = (peerConnection?: RTCPeerConnection) => {
    if (peerConnection) {
      peerConnection.ondatachannel = (e) => {
        messageChannel.current = e.channel;
      };
    }
  };

  const startListenMessage = (listener: MessageListener) => {
    if (messageChannel.current) {
      messageChannel.current.onmessage = (e) => {
        listener(e.data);
      };
    }
  };

  const sendMessage = (message: string) => {
    messageChannel.current?.send(message);
  };

  return {
    initDataChannel,
    startListenDataChannel,
    sendMessage,
    startListenMessage,
  };
};
