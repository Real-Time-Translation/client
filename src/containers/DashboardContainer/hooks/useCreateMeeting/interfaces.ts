export enum CreationMeetingEvent {
  Create = 'createMeeting',
  Created = 'meetingCreated',
}

export interface UseCreateMeetingProps {
  onCreated: (createdMeetingId: string) => void;
}
