import axiosInstance from '@api/axios';
import { AxiosResponse } from 'axios';

export interface CreateMeetingResponse {
  data: string;
}

export const createMeetingRequest = (): Promise<
  AxiosResponse<CreateMeetingResponse>
> => {
  return axiosInstance.get('create');
};
