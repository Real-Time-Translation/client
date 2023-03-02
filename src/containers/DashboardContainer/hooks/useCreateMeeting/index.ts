import { useState } from 'react';
import { createMeetingRequest } from './api/createMeetingRequest';
import { isAxiosError } from 'axios';

export const useCreateMeeting = () => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  const createMeeting = async () => {
    try {
      setLoading(true);
      const result = await createMeetingRequest();
      setData(result.data as unknown as string);
    } catch (e) {
      if (isAxiosError(e)) {
        setError(e.message);
      } else console.log('unexpected error:', e);
    } finally {
      setLoading(false);
    }
  };

  return { createMeeting, data, error, loading };
};
