import React, { FC, useState } from 'react';
import { useStyles } from './index.styles';
import { useTranscription } from './hooks/useTranscription';
import Siriwave from 'react-siriwave';
import { MeetingTranscribedMessage } from '@containers/MeetingP2PContainer/interfaces';
import { TranscriptionProps } from './interfaces';
import { ResultsList } from '@containers/MeetingP2PContainer/Transcription/ResultsList';

export const Transcription: FC<TranscriptionProps> = ({
  onLocalChunk,
  remoteTextFragments,
}) => {
  const classes = useStyles();
  const [isSpeechDetected, setIsSpeechDetected] = useState(false);
  const onSpeechDetect = () => {
    setIsSpeechDetected(true);
  };
  const onSpeechEnded = () => {
    setIsSpeechDetected(false);
  };

  const onTextChunk = (chunk: MeetingTranscribedMessage) => {
    onLocalChunk(chunk);
  };

  useTranscription(
    onSpeechDetect,
    onSpeechEnded,
    isSpeechDetected,
    onTextChunk,
  );

  return (
    <section className={classes.root}>
      <div className={classes.speechContainer}>
        <div className={classes.speechIndicator}>
          <Siriwave
            speed={isSpeechDetected ? 0.1 : 0}
            amplitude={isSpeechDetected ? 3 : 0.2}
            lerpSpeed={0.15}
            style="ios9"
            cover={true}
          />
        </div>
        <div className={classes.transcribeResultsContainer}>
          <ResultsList resultsFragments={remoteTextFragments} />
        </div>
      </div>
    </section>
  );
};
