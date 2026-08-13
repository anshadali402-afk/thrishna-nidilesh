'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Music, VolumeX } from 'lucide-react';

type Props = {
  start: boolean;
};

const melody = [261.63, 329.63, 392, 329.63, 293.66, 261.63];
type AudioWindow = Window & typeof globalThis & { webkitAudioContext?: typeof AudioContext };

export default function MusicControl({ start }: Props) {
  const contextRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);
  const [playing, setPlaying] = useState(false);

  const stop = useCallback(() => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    contextRef.current?.suspend();
    setPlaying(false);
  }, []);

  const playPhrase = useCallback((context: AudioContext) => {
    const now = context.currentTime + 0.05;

    melody.forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const time = now + index * 0.58;

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(frequency, time);
      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.exponentialRampToValueAtTime(0.045, time + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.52);

      oscillator.connect(gain).connect(context.destination);
      oscillator.start(time);
      oscillator.stop(time + 0.56);
    });
  }, []);

  const begin = useCallback(async () => {
    const browserWindow = window as AudioWindow;
    const AudioContextClass = browserWindow.AudioContext || browserWindow.webkitAudioContext;
    if (!AudioContextClass) return;

    const context = contextRef.current ?? new AudioContextClass();
    contextRef.current = context;
    await context.resume();
    playPhrase(context);
    timerRef.current = window.setInterval(() => playPhrase(context), 3600);
    setPlaying(true);
  }, [playPhrase]);

  useEffect(() => {
    if (start) begin().catch(() => setPlaying(false));
  }, [begin, start]);

  useEffect(() => () => stop(), [stop]);

  const toggle = () => {
    if (playing) stop();
    else begin().catch(() => setPlaying(false));
  };

  return (
    <motion.button
      onClick={toggle}
      className="fixed bottom-5 right-5 z-[90] w-12 h-12 rounded-full flex items-center justify-center text-ivory"
      style={{
        background: 'linear-gradient(135deg, #6b1f2a 0%, #4a141d 100%)',
        border: '1px solid #c9a55a',
        boxShadow: '0 6px 18px rgba(74,20,29,0.4)',
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={start ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      aria-label={playing ? 'Pause music' : 'Play music'}
      title={playing ? 'Pause music' : 'Play gentle music'}
    >
      {playing ? (
        <span className="relative flex h-5 w-5 items-center justify-center">
          <span className="absolute inline-flex h-3 w-3 rounded-full bg-gold animate-ping opacity-60" />
          <Music className="w-5 h-5 text-gold-light relative z-10" />
        </span>
      ) : (
        <VolumeX className="w-5 h-5 text-gold-light" />
      )}
    </motion.button>
  );
}
