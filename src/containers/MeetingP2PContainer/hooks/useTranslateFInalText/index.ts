import { useCallback } from 'react';
import axios from 'axios';

export const useTranslateFinalText = () => {
  /** Пока на русском */
  const translateChunk = useCallback(async (textChunk: string) => {
    return new Promise((resolve) => {
      console.log(`${import.meta.env.VITE_SERVER_HOST}translate`);
      axios
        .post(`${import.meta.env.VITE_SERVER_HOST}translate`, {
          text: textChunk,
        })
        .then((res) => {
          resolve(res);
        });
    });
  }, []);

  return { translateChunk };
};
