import socket from '@api/socket';
import { useEffect, useState } from 'react';
import { CreationMeetingEvent, UseCreateMeetingProps } from './interfaces';

export const useCreateMeeting = (props: UseCreateMeetingProps) => {
  const [loading, setLoading] = useState(false);

  const createMeeting = () => {
    setLoading(true);
    socket.emit(CreationMeetingEvent.Create);
  };

  useEffect(() => {
    socket.on(CreationMeetingEvent.Created, (createdMeetingId: string) => {
      props?.onCreated(createdMeetingId);
      setLoading(false);
    });
    return () => {
      setLoading(false);
    };
  }, [setLoading]);

  return { createMeeting, loading };
};
