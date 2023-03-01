import { createContext } from 'react';
import { LanguageContextProps } from '@modules/LanguageProvider/interfaces';

export const LanguageContext = createContext<LanguageContextProps>({
  currentLanguage: '',
  onChangeLanguage: () => {
    return;
  },
});
