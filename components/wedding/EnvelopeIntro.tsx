'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Ganesha from './Ganesha';

type Props = {
  onOpen: () => void;
};

export default function EnvelopeIntro({ onOpen }: Props) {
  const [opening, setOpening] = useState(false);
  const [done, setDone] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(() => {
      setDone(true);
      onOpen();
    }, 800);
  };

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-6"
          style={{ background: 'radial-gradient(circle at 50% 40%, #4a141d 0%, #2a0c12 70%, #1a0609 100%)' }}
          initial={{ opacity: 1 }}
          animate={{ opacity: opening ? 0 : 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex flex-col items-center text-center max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <Ganesha className="w-16 h-16 mb-3 gentle-float" />
            <p className="font-cormorant text-gold-light tracking-[0.4em] uppercase text-xs sm:text-sm mb-6">
              With Divine Blessings
            </p>

            <p className="font-cormorant text-gold text-[10px] tracking-[0.3em] uppercase mb-3">
              Wedding Invitation
            </p>
            <p className="font-vibes text-4xl sm:text-5xl text-gold-light leading-tight">
              Thrishna
            </p>
            <p className="font-cormorant text-gold text-lg italic my-1">weds</p>
            <p className="font-vibes text-4xl sm:text-5xl text-gold-light leading-tight">
              Nidilesh
            </p>

            <div className="gold-divider my-5 max-w-[160px] mx-auto">
              <span className="text-gold text-xs">✦</span>
            </div>

            <p className="font-cormorant text-ivory/80 text-sm leading-relaxed">
              Sunday, 30th August 2026
            </p>
            <p className="font-cormorant text-gold text-xs tracking-[0.2em] uppercase mt-1">
              1202 Chingam 14
            </p>
            <p className="font-cormorant text-ivory/70 text-xs mt-2 italic">
              Muhoortham: 09:30 AM – 10:05 AM
            </p>
            <p className="font-cormorant text-ivory/60 text-xs mt-3 leading-relaxed">
              Le Grande Auditorium, Karathode
            </p>

            <motion.button
              onClick={handleOpen}
              className="mt-10 px-10 py-3 rounded-full font-cormorant text-base tracking-[0.25em] uppercase text-ivory"
              style={{
                background: 'linear-gradient(135deg, #6b1f2a 0%, #4a141d 100%)',
                border: '1px solid #c9a55a',
                boxShadow: '0 8px 24px rgba(107,31,42,0.4)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              Open Invitation
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
