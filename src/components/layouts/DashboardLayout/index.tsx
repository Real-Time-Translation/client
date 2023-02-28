import React, { FC } from 'react';
import { DashboardProps } from './interfaces';
import { useStyles } from './index.styles';

/** Wrapper for Dashboard-like containers
 * Sets minimum page height configurations and backgrounds
 * */
export const DashboardLayout: FC<DashboardProps> = ({ children, header, footer }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header>{header}</header>
      <body className={classes.body}>{children}</body>
      <footer>{footer}</footer>
    </div>
  );
};
