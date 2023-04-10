import { useEffect, useRef } from 'react';
import { MeetingTranscribedMessage } from '@containers/MeetingP2PContainer/interfaces';
import { v4 as uuidv4 } from 'uuid';

export const useTranscription = (
  isActive: boolean,
  onSpeechDetect: () => void,
  onSpeechEnded: () => void,
  isSpeechDetected: boolean,
  onFinalTranscriptionFragment: (
    fragmentText: MeetingTranscribedMessage,
  ) => void,
) => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const speechRecognition = useRef(new SpeechRecognition());
  useEffect(() => {
    /** В результате возвращает результат вместе с предыдущими */
    speechRecognition.current.continuous = true;
    /** Возвращает промежуточные результаты */
    speechRecognition.current.interimResults = true; // todo
    // speechRecognition.current.lang = 'es-US';
    // speechRecognition.current.maxAlternatives = 1;

    if (isActive) {
      speechRecognition.current.start();
    }

    speechRecognition.current.onresult = (event: any) => {
      let interimTranscript = '';
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        // todo удалять ненужные старые результаты
        // console.log(event.resultIndex);
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
          onFinalTranscript(finalTranscript);
          onSpeechEnded();
        } else {
          interimTranscript += transcript;
          if (!isSpeechDetected) {
            onSpeechDetect();
          }
        }
      }
    };

    /** Interim and final transcription callbacks */
    const onFinalTranscript = (text: string) => {
      const textId = uuidv4();
      const fragment = {
        text,
        id: textId,
        isFinal: true,
        key: 0,
      };
      onFinalTranscriptionFragment(fragment);
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
