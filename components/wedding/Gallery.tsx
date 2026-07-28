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
            className="relative overflow-hidden rounded-lg group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (i % 6) * 0.08 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Wedding memory ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-burgundy-deep/0 group-hover:bg-burgundy-deep/20 transition-colors duration-500 rounded-lg" />
            <div className="absolute inset-2 border border-gold/0 group-hover:border-gold/50 transition-all duration-500 rounded-md" />
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
