import { ISOLanguage } from '@modules/LanguageProvider/interfaces';

export interface LocaleSelectorProps {
  onChange?: (value: ISOLanguage) => void;
  value?: string;
}
