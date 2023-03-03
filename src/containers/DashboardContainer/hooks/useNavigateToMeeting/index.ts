import { RootPaths } from '@pages/constants';
import { generatePath, useNavigate } from 'react-router-dom';

export const useNavigateToMeeting = () => {
  const navigate = useNavigate();
  return (meetingId: string) =>
    navigate(
      generatePath(RootPaths.P2PMeeting, {
        meetingId,
      }),
    );
};
