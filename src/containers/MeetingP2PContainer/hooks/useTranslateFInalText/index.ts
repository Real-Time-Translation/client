import { useCallback, useContext } from 'react';
import axios from 'axios';
import { LanguageContext } from '@modules/LanguageProvider/context';

export const useTranslateFinalText = () => {
  /** Пока на русском */
  const { currentLanguage } = useContext(LanguageContext);
  const translateChunk = useCallback(
    async (textChunk: string, sourceLanguage: string) => {
      console.log(
        textChunk,
        'sourceLanguage:',
        sourceLanguage,
        'target:',
        currentLanguage,
      );
      return new Promise((resolve) => {
        axios
          .post(`${import.meta.env.VITE_SERVER_HOST}translate`, {
            text: textChunk,
            sourceLanguage: sourceLanguage ?? 'ERROR',
            targetLanguage: currentLanguage ?? 'ERROR',
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
