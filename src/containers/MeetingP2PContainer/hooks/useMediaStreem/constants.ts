export const CAPTURE_OPTIONS: MediaStreamConstraints = {
  audio: true,
  video: {
    width: 640,
    height: 480,
    echoCancellation: true,
    // noiseSuppression: true
  },
};
