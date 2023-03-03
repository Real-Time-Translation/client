import React, { FC } from 'react';
import { MeetingLayoutProps } from './interfaces';
import { useStyles } from './index.styles';

export const MeetingLayout: FC<MeetingLayoutProps> = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};
