'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Ganesha from './Ganesha';

type Props = {
  onOpen: () => void;
};

export default function EnvelopeIntro({ onOpen }: Props) {
  const [opening, setOpening] = useState(false);
  const [done, setDone] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 700);
    return () => clearTimeout(t);
  }, []);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(() => {
      setDone(true);
      onOpen();
    }, 2800);
  };

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-6"
          style={{ background: 'radial-gradient(circle at 50% 40%, #4a141d 0%, #2a0c12 70%, #1a0609 100%)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* soft particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full"
              style={{
                width: 3,
                height: 3,
                background: '#e3c98b',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{ opacity: [0, 0.8, 0], scale: [0, 1.4, 0] }}
              transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 4 }}
            />
          ))}

          <div className="relative flex flex-col items-center w-full max-w-md">
            {/* Ganesha + heading */}
            <motion.div
              className="mb-6 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
            >
              <Ganesha className="w-16 h-16 mx-auto mb-3 gentle-float" />
              <p className="font-cormorant text-gold-light tracking-[0.4em] uppercase text-xs sm:text-sm">
                With Divine Blessings
              </p>
            </motion.div>

            {/* Scroll container */}
            <motion.div
              className="relative w-full"
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={ready ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* The unrolling parchment — uses clipPath to reveal top-to-bottom */}
              <div className="relative mx-auto" style={{ width: 'min(92vw, 340px)' }}>
                {/* Parchment body (revealed by clipPath animation) */}
                <motion.div
                  className="relative overflow-hidden rounded-sm"
                  style={{
                    background: 'linear-gradient(180deg, #fffdf9 0%, #fdf8f3 50%, #f3e7d3 100%)',
                    border: '1px solid rgba(201,165,90,0.5)',
                    boxShadow: '0 25px 60px -15px rgba(0,0,0,0.6)',
                    clipPath: opening
                      ? 'inset(0 0 0 0 round 4px)'
                      : 'inset(0 0 100% 0 round 4px)',
                    transition: 'clip-path 1.8s cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                >
                  {/* Inner ornate border */}
                  <div className="absolute inset-2 border border-gold/40 rounded-sm pointer-events-none z-10" />

                  {/* Decorative top flourish */}
                  <div className="flex items-center justify-center pt-6 pb-2">
                    <div className="gold-divider max-w-[200px]">
                      <span className="text-gold text-sm">❦</span>
                    </div>
                  </div>

                  {/* Scroll content */}
                  <div className="px-6 pb-8 pt-2 text-center">
                    <p className="font-cormorant text-gold text-[10px] tracking-[0.3em] uppercase mb-3">
                      Wedding Invitation
                    </p>
                    <p className="font-vibes text-4xl sm:text-5xl text-burgundy leading-tight">
                      Thrishna
                    </p>
                    <p className="font-cormorant text-gold text-lg italic my-1">weds</p>
                    <p className="font-vibes text-4xl sm:text-5xl text-burgundy leading-tight">
                      Nidilesh
                    </p>

                    <div className="gold-divider my-5 max-w-[160px] mx-auto">
                      <span className="text-gold text-xs">✦</span>
                    </div>

                    <p className="font-cormorant text-dark-brown/80 text-sm leading-relaxed">
                      Sunday, 30th August 2026
                    </p>
                    <p className="font-cormorant text-gold text-xs tracking-[0.2em] uppercase mt-1">
                      1202 Chingam 14
                    </p>
                    <p className="font-cormorant text-dark-brown/70 text-xs mt-2 italic">
                      Muhoortham: 09:30 AM – 10:05 AM
                    </p>
                    <p className="font-cormorant text-dark-brown/60 text-xs mt-3 leading-relaxed">
                      Le Grande Auditorium, Karathode
                    </p>
                  </div>

                  {/* Decorative bottom flourish */}
                  <div className="flex items-center justify-center pb-5">
                    <div className="gold-divider max-w-[200px]">
                      <span className="text-gold text-sm">❦</span>
                    </div>
                  </div>
                </motion.div>

                {/* Top roller (rod) — sits above the parchment, stays fixed */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 z-20"
                  style={{ top: -14 }}
                  animate={opening ? { y: 0 } : { y: 0 }}
                >
                  <div
                    className="relative rounded-full"
                    style={{
                      width: 'min(94vw, 356px)',
                      height: 28,
                      background: 'linear-gradient(180deg, #8a5a2a 0%, #6b4220 50%, #4a2d15 100%)',
                      boxShadow: '0 6px 16px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.15)',
                    }}
                  >
                    {/* Gold end caps */}
                    <div
                      className="absolute -left-2 -top-1 w-7 h-9 rounded-full"
                      style={{
                        background: 'radial-gradient(circle at 35% 30%, #e3c98b, #c9a55a 60%, #8a6a2f 100%)',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                      }}
                    />
                    <div
                      className="absolute -right-2 -top-1 w-7 h-9 rounded-full"
                      style={{
                        background: 'radial-gradient(circle at 35% 30%, #e3c98b, #c9a55a 60%, #8a6a2f 100%)',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                      }}
                    />
                    {/* Gold band detail */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0"
                      style={{ width: '40%', background: 'linear-gradient(180deg, rgba(201,165,90,0.3), transparent)' }}
                    />
                  </div>
                </motion.div>

                {/* Bottom roller — starts at top (rolled up), slides down as it unrolls */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 z-30"
                  style={{ top: 0 }}
                  animate={opening ? { y: 420 } : { y: 0 }}
                  transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className="relative rounded-full"
                    style={{
                      width: 'min(94vw, 356px)',
                      height: 28,
                      background: 'linear-gradient(180deg, #8a5a2a 0%, #6b4220 50%, #4a2d15 100%)',
                      boxShadow: '0 6px 16px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.15)',
                    }}
                  >
                    <div
                      className="absolute -left-2 -top-1 w-7 h-9 rounded-full"
                      style={{
                        background: 'radial-gradient(circle at 35% 30%, #e3c98b, #c9a55a 60%, #8a6a2f 100%)',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                      }}
                    />
                    <div
                      className="absolute -right-2 -top-1 w-7 h-9 rounded-full"
                      style={{
                        background: 'radial-gradient(circle at 35% 30%, #e3c98b, #c9a55a 60%, #8a6a2f 100%)',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                      }}
                    />
                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0"
                      style={{ width: '40%', background: 'linear-gradient(180deg, rgba(201,165,90,0.3), transparent)' }}
                    />
                  </div>
                </motion.div>

                {/* Wax seal — sits on the rolled-up scroll initially, fades as it unrolls */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 z-40"
                  style={{ top: -8 }}
                  animate={opening ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="wax-seal w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center gentle-float">
                    <span className="font-vibes text-gold-light text-xl sm:text-2xl">ॐ</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Open button */}
            <motion.button
              onClick={handleOpen}
              className="mt-10 px-10 py-3 rounded-full font-cormorant text-base tracking-[0.25em] uppercase text-ivory"
              style={{
                background: 'linear-gradient(135deg, #6b1f2a 0%, #4a141d 100%)',
                border: '1px solid #c9a55a',
                boxShadow: '0 8px 24px rgba(107,31,42,0.4)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={ready && !opening ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              {opening ? 'Unrolling…' : 'Open Invitation'}
            </motion.button>

            <motion.p
              className="mt-5 font-cormorant text-gold-light/60 text-xs tracking-[0.3em] uppercase"
              initial={{ opacity: 0 }}
              animate={ready && !opening ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Tap to begin
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
