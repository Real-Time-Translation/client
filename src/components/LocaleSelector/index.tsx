import React, { FC } from 'react';
import { LocaleSelectorProps } from './interfaces';
import { ISO_LOCALES } from '@modules/LanguageProvider/constants';
import { useStyles } from './index.styles';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export const LocaleSelector: FC<LocaleSelectorProps> = () => {
  const classes = useStyles();

  return (
    <FormControl size="small" variant="standard" className={classes.wrapper}>
      <InputLabel>Language ISO Format</InputLabel>

      <Select className={classes.select} color={'error'}>
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
