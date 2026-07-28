'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
  target: string;
};

function getRemaining(target: string) {
  const total = new Date(target).getTime() - Date.now();
  if (total <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
    done: false,
  };
}

export default function Countdown({ target }: Props) {
  const [t, setT] = useState(() => getRemaining(target));

  useEffect(() => {
    const id = setInterval(() => setT(getRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: 'Days', value: t.days },
    { label: 'Hours', value: t.hours },
    { label: 'Minutes', value: t.minutes },
    { label: 'Seconds', value: t.seconds },
  ];

  return (
    <div className="flex justify-center gap-3 sm:gap-5">
      {units.map((u, i) => (
        <motion.div
          key={u.label}
          className="luxe-card rounded-xl px-3 py-4 sm:px-6 sm:py-5 min-w-[68px] sm:min-w-[92px] text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
        >
          <motion.div
            key={u.value}
            className="font-playfair text-2xl sm:text-4xl text-burgundy font-bold"
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {String(u.value).padStart(2, '0')}
          </motion.div>
          <div className="font-cormorant text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold mt-1">
            {u.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
