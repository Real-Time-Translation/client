import React, { FC, useEffect } from 'react';
import { ResultsListProps } from './interfaces';
import { Divider, LinearProgress, Typography } from '@mui/material';
import { useStyles } from './index.styles';

export const ResultsList: FC<ResultsListProps> = ({ resultsFragments }) => {
  const classes = useStyles();

  const messagesEndRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [resultsFragments]);

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
      <div ref={messagesEndRef} />
    </div>
  );
};
