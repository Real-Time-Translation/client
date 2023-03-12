import React, { FC, lazy, Suspense } from 'react';
import { LanguageIconProps } from './interfaces';
import { useStyles } from './index.styles';

export const LanguageIcon: FC<LanguageIconProps> = ({ languageCode }) => {
  const classes = useStyles();
  const Icon = lazy(() =>
    import('country-flag-icons/react/3x2').then((module) => ({
      default: module['RU'],
    })),
  );

  return (
    <Suspense>
      <Icon className={classes.iconWrapper} />
    </Suspense>
  );
};
