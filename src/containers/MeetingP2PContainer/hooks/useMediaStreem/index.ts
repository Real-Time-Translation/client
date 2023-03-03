import { useCallback, useEffect, useRef, useState } from 'react';
import { CAPTURE_OPTIONS } from '@containers/MeetingP2PContainer/hooks/useMediaStreem/constants';

export const useMediaStream = () => {
  const [localMediaStream, setLocalMediaStream] = useState<MediaStream>();
  const localVideoElement = useRef<HTMLVideoElement>(null);

  const onGetLocalMediaStream = useCallback((stream: MediaStream) => {
    setLocalMediaStream(stream);
    if (localVideoElement.current) {
      localVideoElement.current.volume = 0;
      localVideoElement.current.srcObject = stream;
    }
  }, []);

  const onGetLocalMediaStreamError = useCallback((e: string) => {
    console.warn('Unable to get local stream', e);
  }, []);

  const cleanup = () => {
    if (localMediaStream) {
      localMediaStream.getTracks().forEach((track) => {
        track.stop();
      });
    }
  };

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia(CAPTURE_OPTIONS)
      .then(onGetLocalMediaStream)
      .catch(onGetLocalMediaStreamError);
    return cleanup;
  }, []);

  return { localVideoElement };
};
