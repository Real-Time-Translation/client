import socket from '@api/socket';
import { useEffect, useState } from 'react';
import { CreationMeetingEvent, UseCreateMeetingProps } from './interfaces';

export const useCreateMeeting = (props: UseCreateMeetingProps) => {
  const [loading, setLoading] = useState(false);
  const [meetingErrorTimeOuted, setMeetingErrorTimeOuted] = useState(false);

  const createMeeting = () => {
    setLoading(true);
    socket.emit(CreationMeetingEvent.Create);
  };

  useEffect(() => {
    if (loading) {
      setMeetingErrorTimeOuted(false);
      const timeout = setTimeout(() => {
        setMeetingErrorTimeOuted(true);
        setLoading(false);
      }, 3000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [loading]);

  useEffect(() => {
    socket.on(CreationMeetingEvent.Created, (createdMeetingId: string) => {
      props?.onCreated(createdMeetingId);
      setLoading(false);
    });
    return () => {
      socket.off();
      setLoading(false);
      setMeetingErrorTimeOuted(false);
    };
  }, [setLoading, setMeetingErrorTimeOuted]);

  return { createMeeting, loading };
};
