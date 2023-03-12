import React, { FC, useEffect } from 'react';
import { MeetingP2PContainerProps } from './interfaces';
import { useMediaStream } from './hooks/useMediaStreem';
import { useStyles } from './index.styles';
import { Controls } from './Controls';
import { usePeerConnection } from './hooks/usePeerConnection';
import { Button } from '@mui/material';
import { Participants } from '@containers/MeetingP2PContainer/Participants';
import { Transcription } from '@containers/MeetingP2PContainer/Transcription';

export const MeetingP2PContainer: FC<MeetingP2PContainerProps> = ({
  meetingId,
}) => {
  const classes = useStyles();
  const {
    localVideoElement,
    localMediaStream,
    remoteMediaStream,
    handleReceiveRemoteTrackEvent,
    remoteRefCb,
  } = useMediaStream();
  const { startListenDataChannelMessage, sendDataChannelMessage } =
    usePeerConnection(
      meetingId,
      localMediaStream as MediaStream,
      handleReceiveRemoteTrackEvent,
    );

  useEffect(() => {
    const messageListener = (msg: string) => {
      console.log(msg);
    };

    startListenDataChannelMessage(messageListener);
  }, [startListenDataChannelMessage, sendDataChannelMessage]);

  return (
    <div className={classes.root}>
      <Participants
        meetingId={meetingId}
        remoteMediaStream={remoteMediaStream}
        remoteRefCb={remoteRefCb}
        ref={localVideoElement}
      />
      <Transcription />
      <Controls />
    </div>
  );
};
