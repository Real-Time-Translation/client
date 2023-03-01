import React, { FC, useState } from 'react';
import {
  ISOLanguage,
  LanguageContextProps,
  LanguageProviderProps,
} from './interfaces';
import { LanguageContext } from './context';
import { SESSION_STORAGE_LOCALE_KEY } from './constants';

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const preferredLanguage = sessionStorage.getItem(
    SESSION_STORAGE_LOCALE_KEY,
  ) as ISOLanguage;

  const [language, setLanguage] = useState(
    preferredLanguage ?? (navigator.language as ISOLanguage),
  );

  const contextValue: LanguageContextProps = {
    currentLanguage: language,
    onChangeLanguage: (newLanguage) => {
      setLanguage(newLanguage);
      sessionStorage.setItem(SESSION_STORAGE_LOCALE_KEY, newLanguage);
    },
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
