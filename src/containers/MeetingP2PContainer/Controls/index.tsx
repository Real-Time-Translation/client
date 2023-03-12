import React, { FC } from 'react';

import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideocamIcon from '@mui/icons-material/Videocam';
import CallEndIcon from '@mui/icons-material/CallEnd';
import { useStyles } from './index.styles';

export const Controls: FC = () => {
  const classes = useStyles();
  return (
    <section className={classes.controlsWrapper}>
      <KeyboardVoiceIcon />
      <VideocamIcon />
      <CallEndIcon className={classes.endCallIcon} />
    </section>
  );
};
