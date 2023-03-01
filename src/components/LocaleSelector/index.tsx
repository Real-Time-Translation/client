import React, { FC } from 'react';
import { LocaleSelectorProps } from './interfaces';
import { ISO_LOCALES } from '@modules/LanguageProvider/constants';
import { useStyles } from './index.styles';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { ISOLanguage } from '@modules/LanguageProvider/interfaces';

export const LocaleSelector: FC<LocaleSelectorProps> = ({
  value,
  onChange,
}) => {
  const classes = useStyles();

  return (
    <FormControl size="small" variant="standard" className={classes.wrapper}>
      <InputLabel>Language ISO</InputLabel>
      <Select
        className={classes.select}
        color={'error'}
        onChange={(event: SelectChangeEvent) => {
          onChange?.(event.target.value as ISOLanguage);
        }}
        value={value}
        defaultValue={''}
      >
        <MenuItem value={'Choose'} />
        {Object.keys(ISO_LOCALES).map((locale) => (
          <MenuItem key={locale} value={locale}>
            {locale}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
