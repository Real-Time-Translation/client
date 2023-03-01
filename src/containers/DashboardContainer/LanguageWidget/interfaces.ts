import { ISOLanguage } from '@modules/LanguageProvider/interfaces';

export interface LanguageWidgetProps {
  currentLanguage: ISOLanguage | '';
  onChangeLanguage: (language: ISOLanguage) => void;
}
