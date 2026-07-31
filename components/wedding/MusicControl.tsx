'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, VolumeX } from 'lucide-react';

type Props = {
  start: boolean;
};

export default function MusicControl({ start }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio(
        'https://cdn.pixabay.com/audio/2022/10/18/audio_3b9d5b8e8a.mp3'
      );
      audio.loop = true;
      audio.volume = 0.35;
      audio.preload = 'auto';
      audioRef.current = audio;
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (start) {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  }, [start]);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  };

  return (
    <>
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
    </>
  );
}
