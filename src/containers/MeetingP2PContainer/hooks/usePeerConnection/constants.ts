export const STUN_SERVERS = {
  iceServers: [
    {
      urls: 'stun:stun.l.google.com:19302',
    },
    {
      urls: 'stun:relay.backups.cz',
    },
  ],
  rtcpMuxPolicy: 'negotiate',
};
