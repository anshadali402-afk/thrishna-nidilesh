'use client';

import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export default function Section({ children, id, className = '' }: Props) {
  return (
    <motion.section
      id={id}
      className={`relative px-5 py-16 sm:py-24 ${className}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

export function SectionTitle({
  kicker,
  title,
  className = '',
}: {
  kicker?: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      {kicker && (
        <motion.p
          className="font-cinzel text-xs uppercase tracking-[0.32em] text-gold mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {kicker}
        </motion.p>
      )}
      <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl text-burgundy font-semibold tracking-[0.04em]">
        {title}
      </h2>
      <div className="gold-divider mt-5 max-w-xs mx-auto">
        <span className="text-gold text-lg">❦</span>
      </div>
    </div>
  );
}
