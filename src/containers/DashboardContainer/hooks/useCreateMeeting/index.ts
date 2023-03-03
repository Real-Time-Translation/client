import socket from '@api/socket';
import { useEffect, useState } from 'react';
import { CreationMeetingEvent } from './interfaces';

export const useCreateMeeting = () => {
  const [loading, setLoading] = useState(false);

  const createMeeting = () => {
    setLoading(true);
    socket.emit(CreationMeetingEvent.Create);
  };

  useEffect(() => {
    socket.on(CreationMeetingEvent.Created, (createdMeetingId) => {
      console.log(createdMeetingId);
      setLoading(false);
    });
    return () => {
      setLoading(false);
    };
  }, [setLoading]);

  return { createMeeting, loading };
};
