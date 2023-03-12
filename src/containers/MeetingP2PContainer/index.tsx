import React, { FC } from 'react';
import { MeetingP2PContainerProps } from './interfaces';
import { useMediaStream } from './hooks/useMediaStreem';
import { useStyles } from './index.styles';
import { Controls } from './Controls';
import { InviteWidget } from './InviteWidget';
import { LanguageIcon } from './LanguageIcon';
import { usePeerConnection } from './hooks/usePeerConnection';

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
  usePeerConnection(
    meetingId,
    localMediaStream as MediaStream,
    handleReceiveRemoteTrackEvent,
  );
  return (
    <div className={classes.root}>
      <section className={classes.videoSectionContainer}>
        <div className={classes.viewItem}>
          <div className={classes.videoWrapper}>
            <LanguageIcon languageCode={'ru'} />
            <video
              className={classes.videoElement}
              ref={localVideoElement}
              autoPlay
              playsInline
            >
              <track kind="captions" />
            </video>
          </div>
        </div>
        <div className={classes.viewItem}>
          {!remoteMediaStream ? (
            <InviteWidget meetingId={meetingId} />
          ) : (
            <div className={classes.videoWrapper}>
              <video
                className={classes.videoElement}
                ref={remoteRefCb}
                autoPlay
                playsInline
              >
                <track kind="captions" />
              </video>
            </div>
          )}
        </div>
      </section>
      <section className={classes.translatorWrapper}></section>
      <Controls />
    </div>
  );
};
