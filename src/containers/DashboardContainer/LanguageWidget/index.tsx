import React, { FC, useState } from 'react';
import { WidgetCardCornerRadiusDirection } from '@components/WidgetCard/interfaces';
import { PublicSharp } from '@mui/icons-material';
import { LocaleSelector } from '@components/LocaleSelector';
import { WidgetCard } from '@components/WidgetCard';
import { ISOLanguage } from '@modules/LanguageProvider/interfaces';
import { LanguageWidgetProps } from './interfaces';

export const LanguageWidget: FC<LanguageWidgetProps> = ({
  currentLanguage,
  onChangeLanguage,
}) => {
  const [isLocaleSelectorShown, setIsLocaleSelectorShown] =
    useState<boolean>(false);
  const handleShowSelector = () => {
    setIsLocaleSelectorShown(true);
  };
  const handleLocaleSelectorChange = (language: ISOLanguage) => {
    onChangeLanguage(language);
    setIsLocaleSelectorShown(false);
  };

  return (
    <>
      <WidgetCard
        cornerRadiusDirection={WidgetCardCornerRadiusDirection.BottomRight}
        title={`Your language: ${currentLanguage}`}
        subtitle={'Click here to change'}
        icon={PublicSharp}
        controls={
          <LocaleSelector
            onChange={handleLocaleSelectorChange}
            value={currentLanguage}
          />
        }
        isControlsShown={isLocaleSelectorShown}
        onSubtitleClick={handleShowSelector}
      />
    </>
  );
};
