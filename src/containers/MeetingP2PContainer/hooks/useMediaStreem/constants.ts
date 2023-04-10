export const CAPTURE_OPTIONS: MediaStreamConstraints = {
  audio: {
    echoCancellation: true,
    noiseSuppression: true,
  },
  video: {
    width: 640,
    height: 480,
  },
};
