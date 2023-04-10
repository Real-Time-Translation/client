import { MeetingTranscribedMessage } from '@containers/MeetingP2PContainer/interfaces';

export interface TranscriptionProps {
  onFinalLocalFragment: (fragment: MeetingTranscribedMessage) => void;
  remoteTextFragments: MeetingTranscribedMessage[];
  isActive: boolean;
}
