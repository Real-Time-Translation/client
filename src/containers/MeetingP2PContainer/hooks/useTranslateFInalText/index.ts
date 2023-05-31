import { useCallback, useContext } from 'react';
import axios from 'axios';
import { LanguageContext } from '@modules/LanguageProvider/context';

export const useTranslateFinalText = () => {
  /** Пока на русском */
  const { currentLanguage } = useContext(LanguageContext);
  const translateChunk = useCallback(
    async (textChunk: string, sourceLanguage: string) => {
      return new Promise((resolve) => {
        axios
          .post(`${import.meta.env.VITE_SERVER_HOST}translate`, {
            text: textChunk,
            sourceLanguage: sourceLanguage ?? 'ERROR',
            currentLanguage: currentLanguage ?? 'ERROR',
          })
          .then((res) => {
            resolve(res);
          });
      });
    },
    [],
  );

  return { translateChunk };
};
