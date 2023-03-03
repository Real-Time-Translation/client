import React, { FC } from 'react';
import { MeetingP2PContainerProps } from './interfaces';
import { useMediaStream } from './hooks/useMediaStreem';
import { useStyles } from './index.styles';

export const MeetingP2PContainer: FC<MeetingP2PContainerProps> = () =>
  // {
  // meetingId,
  //}
  {
    const classes = useStyles();
    const { localVideoElement } = useMediaStream();

    return (
      <div className={classes.root}>
        <section className={classes.videoSectionContainer}>
          <div className={classes.viewItem}>
            <video
              className={classes.videoElement}
              ref={localVideoElement}
              autoPlay
              playsInline
            >
              <track kind="captions" />
            </video>
          </div>
          <div className={classes.viewItem}>
            <div className={classes.companionInviteWrapper}></div>
          </div>
        </section>
        <section className={classes.translatorWrapper}>Translator</section>
        <section>Test 3</section>
      </div>
    );
  };
