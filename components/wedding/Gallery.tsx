'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

type Props = {
  images: string[];
};

export default function Gallery({ images }: Props) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
        {images.map((src, i) => (
          <motion.button
            key={i}
            onClick={() => setActive(i)}
            className={`relative overflow-hidden rounded-xl group border border-gold/30 bg-ivory shadow-lg ${i === 0 ? 'col-span-2 sm:col-span-1' : ''}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="aspect-[3/4] overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Wedding memory ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/45 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
            <div className="absolute inset-2 border border-gold/30 transition-all duration-500 group-hover:border-gold/90 rounded-lg" />
            <span className="absolute bottom-4 left-0 right-0 font-cinzel text-[10px] tracking-[0.22em] uppercase text-gold-light opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              Our Story
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[95] flex items-center justify-center p-4"
            style={{ background: 'rgba(20,8,12,0.92)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              className="absolute top-5 right-5 text-gold-light"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              src={images[active]}
              alt="Wedding memory"
              className="max-w-full max-h-[85vh] rounded-lg border border-gold/40"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
