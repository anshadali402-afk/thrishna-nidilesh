'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

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
          className="fixed inset-0 z-[100] flex min-h-[100dvh] items-center justify-center p-3 sm:p-6 overflow-y-auto"
          style={{ background: 'radial-gradient(circle at 50% 35%, #6b1f2a 0%, #320b13 54%, #180407 100%)' }}
          animate={{ opacity: opening ? 0 : 1, scale: opening ? 1.04 : 1 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="relative w-full max-w-md md:max-w-4xl max-h-[92dvh] overflow-y-auto md:overflow-hidden rounded-[2rem] border border-gold/60 bg-ivory shadow-2xl my-auto no-scrollbar"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pointer-events-none absolute inset-3 z-10 rounded-[1.5rem] border border-gold/30 hidden md:block" />
            <div className="grid md:grid-cols-[0.9fr_1.1fr]">
              {/* Half Size Photo Container */}
              <motion.div
                className="relative w-full h-[40dvh] min-h-[260px] max-h-[340px] md:h-auto md:min-h-[560px] md:max-h-none overflow-hidden bg-burgundy-deep/20"
                initial={{ clipPath: 'inset(0 0 100% 0)' }}
                animate={{ clipPath: 'inset(0 0 0% 0)' }}
                transition={{ duration: 1.15, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/gallery/wedding-portrait.jpeg"
                  alt="Thrishna and Nidilesh"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: '50% 12%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/70 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-0 right-0 text-center font-cinzel text-[10px] sm:text-xs tracking-[0.28em] uppercase text-gold-light drop-shadow">
                  A new beginning
                </p>
              </motion.div>

              {/* Invitation Details & Open Action */}
              <div className="relative flex flex-col items-center justify-center px-6 py-6 text-center sm:px-12 sm:py-8 md:py-12">
                <p className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-gold sm:text-xs">
                  With divine blessings
                </p>
                <div className="gold-divider my-4 w-full max-w-[180px]">
                  <span className="text-gold text-xs">✦</span>
                </div>
                <p className="font-cinzel text-[10px] tracking-[0.26em] uppercase text-burgundy/70">
                  Wedding invitation
                </p>
                <h1 className="font-vibes mt-2 text-4xl leading-none text-burgundy sm:text-6xl">
                  Thrishna
                </h1>
                <p className="font-cormorant my-1 text-xl italic text-gold">weds</p>
                <h1 className="font-vibes text-4xl leading-none text-burgundy sm:text-6xl">
                  Nidilesh
                </h1>
                <p className="mt-4 font-playfair text-base text-dark-brown sm:mt-6 sm:text-lg">
                  Sunday, 30th August 2026
                </p>
                <p className="mt-1 font-cinzel text-[10px] tracking-[0.18em] uppercase text-gold">
                  1202 Chingam 14
                </p>
                <p className="mt-3 font-cormorant text-sm italic text-dark-brown/70">
                  Muhoortham · 09:30 AM – 10:05 AM
                </p>
                <p className="mt-1 font-cormorant text-sm text-dark-brown/60">
                  Le Grande Auditorium, Karathode
                </p>

                <motion.button
                  onClick={handleOpen}
                  className="pulse-ring relative mt-6 rounded-full px-8 py-3 font-cinzel text-xs tracking-[0.2em] uppercase text-ivory sm:mt-8"
                  style={{
                    background: 'linear-gradient(135deg, #6b1f2a 0%, #4a141d 100%)',
                    border: '1px solid #c9a55a',
                    boxShadow: '0 8px 24px rgba(107,31,42,0.28)',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {opening ? 'Opening...' : 'Open Invitation'}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
