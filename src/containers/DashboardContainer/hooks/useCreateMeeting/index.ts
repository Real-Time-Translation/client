import socket from '@api/socket';
import { useEffect, useState } from 'react';

export const useCreateMeeting = () => {
  const [loading, setLoading] = useState(false);

  const createMeeting = () => {
    setLoading(true);
    socket.emit('createMeeting');
  };

  useEffect(() => {
    socket.on('meetingCreated', (createdMeetingId) => {
      console.log(createdMeetingId);
      setLoading(false);
    });
  }, [setLoading]);

  return { createMeeting, loading };
};
