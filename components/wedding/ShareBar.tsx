'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Copy, Share2 } from 'lucide-react';
import { wedding } from '@/lib/wedding-data';

export default function ShareBar() {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  const link = typeof window !== 'undefined' ? window.location.href : 'https://bolt.new';

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${wedding.bride.name} & ${wedding.groom.name} · Wedding Invitation`,
          text: wedding.shareText,
          url: link,
        });
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch {
        /* dismissed */
      }
    } else {
      copyLink();
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
      <motion.button
        onClick={share}
        className="flex items-center gap-2 px-6 py-3 rounded-full font-cormorant text-base tracking-[0.15em] uppercase text-ivory"
        style={{ background: 'linear-gradient(135deg, #6b1f2a 0%, #4a141d 100%)', border: '1px solid #c9a55a' }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        <AnimatePresence mode="wait">
          {shared ? (
            <motion.span key="ok" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Check className="w-4 h-4 text-gold-light" /> Shared
            </motion.span>
          ) : (
            <motion.span key="share" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Share2 className="w-4 h-4 text-gold-light" /> Share Invitation
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <motion.button
        onClick={copyLink}
        className="flex items-center gap-2 px-6 py-3 rounded-full font-cormorant text-base tracking-[0.15em] uppercase text-burgundy"
        style={{ background: '#fffdf9', border: '1px solid #c9a55a' }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.span key="ok" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Check className="w-4 h-4 text-gold" /> Copied
            </motion.span>
          ) : (
            <motion.span key="copy" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Copy className="w-4 h-4 text-gold" /> Copy Link
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
