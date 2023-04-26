import { useCallback } from 'react';
import axios from 'axios';

export const useTranslateFinalText = () => {
  /** Пока на русском */
  const translateChunk = useCallback(async (textChunk: string) => {
    return new Promise((resolve) => {
      axios
        .post('http://localhost/translate', {
          text: textChunk,
        })
        .then((res) => {
          resolve(res);
        });
    });
  }, []);

  return { translateChunk };
};
