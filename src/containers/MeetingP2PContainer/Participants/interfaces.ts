export interface ParticipantsProps {
  meetingId: string;
  remoteMediaStream?: MediaStream;
  remoteRefCb: (videoElement: HTMLVideoElement) => void;
}
