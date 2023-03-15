import React, { FC } from 'react';
import { ResultsListProps } from './interfaces';
import { Divider, LinearProgress, Typography } from '@mui/material';
import { useStyles } from './index.styles';

export const ResultsList: FC<ResultsListProps> = ({ resultsFragments }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {resultsFragments.map((fragment) => (
        <>
          <div key={fragment.id} className={classes.item}>
            <Typography width={300}>{fragment.text}</Typography>
            <LinearProgress style={{ width: 100 }} />
          </div>
          <Divider />
        </>
      ))}
    </div>
  );
};
