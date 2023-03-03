import React, { FC } from 'react';
import { MeetingP2PContainerProps } from './interfaces';

export const MeetingP2PContainer: FC<MeetingP2PContainerProps> = ({
  meetingId,
}) => {
  return <div>{meetingId}</div>;
};
