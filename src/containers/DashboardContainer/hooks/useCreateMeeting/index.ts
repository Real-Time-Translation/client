import { useState } from 'react';
import {
  createMeetingRequest,
  CreateMeetingResponse,
} from './api/createMeetingRequest';
import { isAxiosError, AxiosResponse } from 'axios';

export const useCreateMeeting = () => {
  const [data, setData] =
    useState<AxiosResponse<CreateMeetingResponse, string>>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();
  const createMeeting = async () => {
    try {
      setLoading(true);
      const result = await createMeetingRequest();
      setData(result);
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
