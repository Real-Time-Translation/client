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
import { useTranslateFinalText } from '@containers/MeetingP2PContainer/hooks/useTranslateFInalText';
import socket from '@api/socket';

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
  const {
    startListenDataChannelMessage,
    sendDataChannelMessage,
    channelState,
  } = usePeerConnection(
    meetingId,
    localMediaStream as MediaStream,
    handleReceiveRemoteTrackEvent,
  );

  /** Бизнесс логика звонка */

  const [remoteTextFragments, setRemoteTextFragments] = useState<
    MeetingTranscribedMessage[]
  >([]);

  const { translateChunk } = useTranslateFinalText();

  useEffect(() => {
    const messageListener = (msg: string) => {
      const textFragment = JSON.parse(msg) as MeetingTranscribedMessage;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (textFragment.socketId !== socket.id) {
        setRemoteTextFragments((prevState) => {
          const chunkToReplaceIdx = prevState.findIndex(
            (chunk) => chunk.key === textFragment.key,
          );
          if (chunkToReplaceIdx !== -1 || !prevState.length) {
            return [
              ...prevState.slice(0, chunkToReplaceIdx),
              textFragment,
            ] as MeetingTranscribedMessage[];
          } else return [...prevState, textFragment];
        });
        /** Переводим текст если он финальный */
        if (textFragment.isFinal) {
          translateChunk(textFragment.text).then((translated) => {
            setRemoteTextFragments((prevState) => {
              const translatedChunk = {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                text: translated.data ?? '',
                key: textFragment.key,
                isFinal: true,
                id: textFragment.id,
                translated: true,
              };
              const filteredWithoutOldChunk = prevState.filter(
                (chunkToReplace) => chunkToReplace.key !== translatedChunk.key,
              );
              filteredWithoutOldChunk.push(translatedChunk);
              return filteredWithoutOldChunk;
            });
          });
        }
      }
    };

    startListenDataChannelMessage(messageListener);
  }, [startListenDataChannelMessage]);

  /** Посылаем фрагмент текста другому пиру */
  const onLocalChunk = (chunk: MeetingTranscribedMessage) => {
    sendDataChannelMessage(JSON.stringify({ ...chunk, socketId: socket.id }));
  };
  return (
    <div className={classes.root}>
      <Participants
        meetingId={meetingId}
        remoteMediaStream={remoteMediaStream}
        remoteRefCb={remoteRefCb}
        ref={localVideoElement}
      />
      {channelState === 'open' && (
        <Transcription
          onLocalChunk={onLocalChunk}
          remoteTextFragments={remoteTextFragments}
        />
      )}
      <Controls localMediaStream={localMediaStream as MediaStream} />
    </div>
  );
};
