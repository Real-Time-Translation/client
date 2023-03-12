import React, { ForwardedRef, forwardRef } from 'react';
import { LanguageIcon } from './LanguageIcon';
import { InviteWidget } from './InviteWidget';
import { useStyles } from './index.styles';
import { ParticipantsProps } from './interfaces';

export const Participants = forwardRef(
  (
    { remoteMediaStream, meetingId, remoteRefCb }: ParticipantsProps,
    localVideoElement: ForwardedRef<HTMLVideoElement>,
  ) => {
    const classes = useStyles();
    const videoRef = localVideoElement as React.RefObject<HTMLVideoElement>;
    const isLanguageIconVisible = !!videoRef.current?.srcObject;
    return (
      <section className={classes.videoSectionContainer}>
        <div className={classes.viewItem}>
          <div className={classes.videoWrapper}>
            {isLanguageIconVisible && <LanguageIcon languageCode={'ru'} />}
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
    );
  },
);

Participants.displayName = 'Participants';
