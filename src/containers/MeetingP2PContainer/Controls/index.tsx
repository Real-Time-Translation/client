import React, { FC, useEffect, useState } from 'react';

import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideocamIcon from '@mui/icons-material/Videocam';
import CallEndIcon from '@mui/icons-material/CallEnd';
import { useStyles } from './index.styles';
import { ControlsProps } from './interfaces';

export const Controls: FC<ControlsProps> = ({ localMediaStream }) => {
  const classes = useStyles();

  const [isVideoMuted, setIsVideoMuted] = useState<boolean>();
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>();

  useEffect(() => {
    if (localMediaStream?.getAudioTracks()[0]) {
      console.log(localMediaStream.getAudioTracks()[0].enabled);
      setIsAudioMuted(!localMediaStream?.getAudioTracks()[0].enabled);
    }
  }, [localMediaStream]);

  useEffect(() => {
    if (localMediaStream?.getAudioTracks()[0]) {
      setIsVideoMuted(!localMediaStream?.getVideoTracks()[0].enabled);
    }
  }, [localMediaStream]);

  const onMuteAudioToggle = () => {
    const audioTrack = localMediaStream?.getAudioTracks()[0];
    if (audioTrack) {
      audioTrack.enabled = !audioTrack.enabled;
      setIsAudioMuted(!audioTrack.enabled);
    }
  };

  const onMuteVideoToggle = () => {
    const videoTrack = localMediaStream?.getVideoTracks()[0];
    if (videoTrack) {
      videoTrack.enabled = !videoTrack.enabled;
      setIsVideoMuted(!videoTrack.enabled);
    }
  };

  return (
    <section className={classes.controlsWrapper}>
      <KeyboardVoiceIcon
        onClick={onMuteAudioToggle}
        style={{ cursor: 'pointer', color: isAudioMuted ? 'red' : 'white' }}
      />
      <VideocamIcon
        onClick={onMuteVideoToggle}
        style={{ cursor: 'pointer', color: isVideoMuted ? 'red' : 'white' }}
      />
      <CallEndIcon className={classes.endCallIcon} />
    </section>
  );
};
