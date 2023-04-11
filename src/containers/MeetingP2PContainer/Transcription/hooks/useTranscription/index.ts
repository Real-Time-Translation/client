import { useEffect, useRef } from 'react';
import { MeetingTranscribedMessage } from '@containers/MeetingP2PContainer/interfaces';
import { v4 as uuidv4 } from 'uuid';

const TRANSMISSION_SKIP_RATE = 3;

export const useTranscription = (
  onSpeechDetect: () => void,
  onSpeechEnded: () => void,
  isSpeechDetected: boolean,
  onTextChunk: (fragmentText: MeetingTranscribedMessage) => void,
) => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const speechRecognition = useRef(new SpeechRecognition());

  const chunkIdx = useRef(0);

  const interimOutputStack = useRef<string[]>([]);

  const formatChunk = (
    text: string,
    chunkIdx: number,
    isFinal: boolean,
  ): MeetingTranscribedMessage => {
    return {
      text,
      key: chunkIdx,
      isFinal,
      id: uuidv4(),
    };
  };

  const formatAndSendChunkToChannel = (
    text: string,
    chunkIdx: number,
    isFinal: boolean,
  ) => {
    onTextChunk(formatChunk(text, chunkIdx, isFinal));
  };

  useEffect(() => {
    /** Возвращает промежуточные результаты */
    speechRecognition.current.interimResults = true;
    // speechRecognition.current.lang = 'es-US';

    speechRecognition.current.start();

    console.log('start');
    speechRecognition.current.onresult = (event: any) => {
      console.log('result');
      const interimTranscript = [];
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript.push(transcript);
        }
      }

      // update the UI with the interim and final results
      const interimOutput = interimTranscript.join('');
      const finalOutput = finalTranscript;
      interimOutputStack.current.push(interimOutput);
      if (
        interimOutput &&
        interimOutputStack.current.length % TRANSMISSION_SKIP_RATE === 0
      ) {
        formatAndSendChunkToChannel(interimOutput, chunkIdx.current, false);
      } else if (finalOutput) {
        try {
          formatAndSendChunkToChannel(finalTranscript, chunkIdx.current, true);
        } finally {
          interimOutputStack.current = [];
          chunkIdx.current += 1;
        }
      }
    };

    speechRecognition.current.onspeechstart = () => {
      onSpeechDetect();
    };

    speechRecognition.current.onspeechend = () => {
      onSpeechEnded();
    };

    speechRecognition.current.onend = () => {
      speechRecognition.current.start();
    };
    return () => {
      speechRecognition.current.stop();
    };
  }, []);
};
