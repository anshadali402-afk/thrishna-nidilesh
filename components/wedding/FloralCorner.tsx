'use client';

import { motion } from 'framer-motion';

type Props = {
  className?: string;
  flip?: boolean;
};

export default function FloralCorner({ className = '', flip = false }: Props) {
  return (
    <motion.svg
      viewBox="0 0 240 240"
      className={className}
      style={{ transform: flip ? 'scale(-1, -1)' : undefined }}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      aria-hidden
    >
      {/* Long curving stem with leaves */}
      <g fill="none" stroke="#5a7d3a" strokeWidth="1.8" strokeLinecap="round">
        <path d="M20 230 C 40 180, 55 130, 80 90 C 110 55, 150 35, 200 25" />
        <path d="M48 175 C 38 168, 34 158, 40 148 C 52 152, 58 165, 48 175 Z" fill="#6b9147" fillOpacity="0.45" />
        <path d="M72 120 C 62 116, 58 106, 66 98 C 78 102, 84 112, 72 120 Z" fill="#6b9147" fillOpacity="0.4" />
        <path d="M104 80 C 94 78, 90 70, 98 64 C 110 68, 116 76, 104 80 Z" fill="#6b9147" fillOpacity="0.45" />
        <path d="M150 50 C 140 50, 136 44, 144 38 C 156 40, 162 46, 150 50 Z" fill="#6b9147" fillOpacity="0.4" />
      </g>

      {/* Tulip flowers (closed, side-view like the card) */}
      {/* Flower 1 - bottom large */}
      <g transform="translate(40 168)">
        <path d="M0 0 C -8 -4, -10 -18, -3 -26 C 0 -22, 3 -22, 6 -26 C 13 -18, 11 -4, 0 0 Z" fill="#b8332e" />
        <path d="M0 0 C -3 -6, -4 -16, 0 -24 C 4 -16, 3 -6, 0 0 Z" fill="#d94a3f" />
        <path d="M-2 -8 C -4 -14, -4 -20, 0 -25" stroke="#8a1f1c" strokeWidth="0.6" fill="none" />
        <path d="M2 -8 C 4 -14, 4 -20, 0 -25" stroke="#8a1f1c" strokeWidth="0.6" fill="none" />
        <circle cx="0" cy="-22" r="1.4" fill="#e3c98b" opacity="0.7" />
      </g>

      {/* Flower 2 - middle */}
      <g transform="translate(68 110)">
        <path d="M0 0 C -7 -3, -9 -16, -2 -23 C 1 -19, 3 -19, 5 -23 C 12 -16, 10 -3, 0 0 Z" fill="#b8332e" />
        <path d="M0 0 C -2 -5, -3 -14, 0 -21 C 3 -14, 2 -5, 0 0 Z" fill="#d94a3f" />
        <circle cx="0" cy="-19" r="1.2" fill="#e3c98b" opacity="0.7" />
      </g>

      {/* Flower 3 - upper */}
      <g transform="translate(100 72)">
        <path d="M0 0 C -6 -3, -8 -14, -2 -20 C 1 -17, 3 -17, 4 -20 C 10 -14, 8 -3, 0 0 Z" fill="#b8332e" />
        <path d="M0 0 C -2 -4, -3 -12, 0 -18 C 3 -12, 2 -4, 0 0 Z" fill="#d94a3f" />
        <circle cx="0" cy="-16" r="1.1" fill="#e3c98b" opacity="0.7" />
      </g>

      {/* Flower 4 - top */}
      <g transform="translate(146 42)">
        <path d="M0 0 C -5 -2, -7 -12, -1 -17 C 1 -14, 3 -14, 4 -17 C 9 -12, 7 -2, 0 0 Z" fill="#b8332e" />
        <path d="M0 0 C -1 -4, -2 -10, 0 -15 C 2 -10, 1 -4, 0 0 Z" fill="#d94a3f" />
        <circle cx="0" cy="-13" r="1" fill="#e3c98b" opacity="0.7" />
      </g>

      {/* Small buds */}
      <g fill="#b8332e">
        <circle cx="185" cy="28" r="3" />
        <circle cx="183" cy="25" r="2" fill="#d94a3f" />
        <circle cx="210" cy="22" r="2.5" />
        <circle cx="208" cy="20" r="1.6" fill="#d94a3f" />
      </g>


      {/* Tiny accent leaves */}
      <g fill="#6b9147" fillOpacity="0.5" stroke="#5a7d3a" strokeWidth="0.6">
        <path d="M30 200 C 26 196, 24 190, 28 186 C 34 190, 36 196, 30 200 Z" />
        <path d="M88 96 C 84 92, 82 86, 86 82 C 92 86, 94 92, 88 96 Z" />
      </g>
    </motion.svg>
  );
}
