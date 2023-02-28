import socket from '@api/socket';

export const useGetPeers = () => {
  socket.on('JOIN', () => {
    console.log('join');
    /** TODO handle error with toast */
  });
};
