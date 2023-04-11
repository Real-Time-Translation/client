import { MeetingTranscribedMessage } from '@containers/MeetingP2PContainer/interfaces';

export interface TranscriptionProps {
  onLocalChunk: (chunk: MeetingTranscribedMessage) => void;
  remoteTextFragments: MeetingTranscribedMessage[];
}
