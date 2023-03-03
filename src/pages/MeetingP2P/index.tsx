import React, { FC } from 'react';
import { MeetingLayout } from '@components/layouts/MeetingLayout';
import { MeetingP2PContainer } from '@containers/MeetingP2PContainer';
import { useParams } from 'react-router-dom';

export const MeetingP2P: FC = () => {
  const { meetingId } = useParams();

  return (
    <MeetingLayout>
      <MeetingP2PContainer meetingId={meetingId as string} />
    </MeetingLayout>
  );
};
