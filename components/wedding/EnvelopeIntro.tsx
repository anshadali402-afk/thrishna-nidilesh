'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Ganesha from './Ganesha';

type Props = { onOpen: () => void };

export default function EnvelopeIntro({ onOpen }: Props) {
  const [opening, setOpening] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = done ? '' : 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [done]);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    // Start the invitation while this tap still counts as a user gesture.
    // That lets the background music play reliably in modern browsers.
    onOpen();
    window.setTimeout(() => setDone(true), 850);
  };

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex min-h-[100dvh] items-center justify-center p-4 sm:p-6 overflow-y-auto"
          style={{ background: 'radial-gradient(circle at 50% 35%, #6b1f2a 0%, #320b13 54%, #180407 100%)' }}
          animate={{ opacity: opening ? 0 : 1, scale: opening ? 1.04 : 1 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] border border-gold/60 bg-ivory shadow-2xl my-auto p-6 sm:p-10 text-center"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Inner Ornate Accent Line */}
            <div className="pointer-events-none absolute inset-3 rounded-[2rem] border border-gold/30" />

            <div className="relative z-20 flex flex-col items-center py-2">
              <Ganesha className="w-16 h-16 mb-4 gentle-float" />

              <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold sm:text-sm">
                With divine blessings
              </p>

              <div className="gold-divider my-4 w-full max-w-[180px]">
                <span className="text-gold text-xs">✦</span>
              </div>

              <p className="font-cinzel text-[11px] tracking-[0.26em] uppercase text-burgundy/70 mb-1">
                Wedding invitation
              </p>

              <h1 className="font-vibes text-5xl leading-tight text-burgundy sm:text-7xl">
                Thrishna
              </h1>
              <p className="font-cormorant my-1 text-2xl italic text-gold">weds</p>
              <h1 className="font-vibes text-5xl leading-tight text-burgundy sm:text-7xl">
                Nidilesh
              </h1>

              <p className="mt-6 font-playfair text-lg text-dark-brown font-medium sm:text-xl">
                Sunday, 30th August 2026
              </p>
              <p className="mt-1 font-cinzel text-xs tracking-[0.2em] uppercase text-gold">
                1202 Chingam 14
              </p>

              <p className="mt-4 font-cormorant text-base italic text-dark-brown/75">
                Muhoortham · 09:30 AM – 10:05 AM
              </p>
              <p className="mt-1 font-cormorant text-base text-dark-brown/70">
                Le Grande Auditorium, Karathode
              </p>

              <motion.button
                onClick={handleOpen}
                className="pulse-ring relative mt-8 rounded-full px-10 py-3.5 font-cinzel text-xs sm:text-sm tracking-[0.2em] uppercase text-ivory font-medium shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, #6b1f2a 0%, #4a141d 100%)',
                  border: '1px solid #c9a55a',
                  boxShadow: '0 8px 24px rgba(107,31,42,0.35)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                {opening ? 'Opening...' : 'Open Invitation'}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
