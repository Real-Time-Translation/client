export interface MeetingP2PContainerProps {
  meetingId: string;
}

export interface MeetingTranscribedMessage {
  id: string;
  isFinal: boolean;
  text: string;
  /** ResultIndex */
  key: number;
  translated?: boolean;
  language: string;
}
