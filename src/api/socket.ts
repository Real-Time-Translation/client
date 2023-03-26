import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_SERVER_HOST);
socket.on('connect', () => {
  console.log('Connected to ws dev server:', import.meta.env.VITE_SERVER_HOST);
});

export default socket;
