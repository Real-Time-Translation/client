import React, { FC, useEffect, useState } from 'react';
import {
  MeetingP2PContainerProps,
  MeetingTranscribedMessage,
} from './interfaces';
import { useMediaStream } from './hooks/useMediaStreem';
import { useStyles } from './index.styles';
import { Controls } from './Controls';
import { usePeerConnection } from './hooks/usePeerConnection';
import { Participants } from '@containers/MeetingP2PContainer/Participants';
import { Transcription } from '@containers/MeetingP2PContainer/Transcription';

export const MeetingP2PContainer: FC<MeetingP2PContainerProps> = ({
  meetingId,
}) => {
  const classes = useStyles();

  /** RTC Services вынесем в отдельный хук и вернем объекты*/
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

  /** Бизнесс логика звонка */

  const [remoteTextFragments, setRemoteTextFragments] = useState<
    MeetingTranscribedMessage[]
  >([]);

  useEffect(() => {
    const messageListener = (msg: string) => {
      const textFragment = JSON.parse(msg) as MeetingTranscribedMessage;
      setRemoteTextFragments((prevState) => [...prevState, textFragment]);
      /** Сюда будут приходить фрагменты сообщений */
    };

    startListenDataChannelMessage(messageListener);
  }, [startListenDataChannelMessage]);

  /** Посылаем фрагмент текста другому пиру */
  const onFinalLocalFragment = (fragment: MeetingTranscribedMessage) => {
    sendDataChannelMessage(JSON.stringify(fragment));
  };
  return (
    <div className={classes.root}>
      <Participants
        meetingId={meetingId}
        remoteMediaStream={remoteMediaStream}
        remoteRefCb={remoteRefCb}
        ref={localVideoElement}
      />
      <Transcription
        onFinalLocalFragment={onFinalLocalFragment}
        remoteTextFragments={remoteTextFragments}
      />
      <Controls />
    </div>
  );
};
