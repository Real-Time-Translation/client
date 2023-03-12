export type ParticipantSDPRole = 'offerer' | 'answerer';

export interface JoinResult {
  sdpRole: ParticipantSDPRole;
  offererSDP?: string;
}

export interface SDPSetResult {
  sdpRole: ParticipantSDPRole;
  sdp: string;
}
