import React, { FC, useState } from 'react';
import {
  ISOLanguage,
  LanguageContextProps,
  LanguageProviderProps,
} from './interfaces';
import { LanguageContext } from './context';

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(navigator.language as ISOLanguage);

  const contextValue: LanguageContextProps = {
    currentLanguage: language,
    onChangeLanguage: (newLanguage) => {
      setLanguage(newLanguage);
    },
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
