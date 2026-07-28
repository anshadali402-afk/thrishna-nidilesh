'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  Navigation,
  MessageCircle,
  Instagram,
  Heart,
  Check,
  Sparkles,
} from 'lucide-react';
import { wedding } from '@/lib/wedding-data';
import EnvelopeIntro from '@/components/wedding/EnvelopeIntro';
import MusicControl from '@/components/wedding/MusicControl';
import Petals from '@/components/wedding/Petals';
import FloralCorner from '@/components/wedding/FloralCorner';
import Ganesha from '@/components/wedding/Ganesha';
import Section, { SectionTitle } from '@/components/wedding/Section';
import Countdown from '@/components/wedding/Countdown';
import Gallery from '@/components/wedding/Gallery';
import QRCode from '@/components/wedding/QRCode';
import ShareBar from '@/components/wedding/ShareBar';

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [rsvpDone, setRsvpDone] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  const waLink = `https://wa.me/${wedding.whatsapp}?text=${encodeURIComponent(
    `Hi! I'm confirming my attendance for ${wedding.hashtag} on ${wedding.dateLabel}.`
  )}`;

  return (
    <>
      {/* Loading screen with monogram */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center"
            style={{ background: 'radial-gradient(circle at 50% 40%, #4a141d 0%, #2a0c12 70%, #1a0609 100%)' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <motion.div
                className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4"
                style={{ border: '1px solid #c9a55a' }}
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              >
                <span className="font-vibes text-3xl shimmer">T&amp;N</span>
              </motion.div>
              <p className="font-cormorant text-gold-light/70 text-xs tracking-[0.4em] uppercase">
                Loading invitation
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Envelope intro */}
      <EnvelopeIntro onOpen={() => setOpened(true)} />

      {/* Music + petals once opened */}
      {opened && (
        <>
          <MusicControl start={opened} />
          <Petals count={20} />
        </>
      )}

      {/* Main invitation */}
      <AnimatePresence>
        {opened && (
          <motion.main
            className="relative min-h-screen overflow-x-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            {/* Floral corners (fixed decorative) */}
            <FloralCorner className="fixed top-0 right-0 w-44 h-44 sm:w-64 sm:h-64 pointer-events-none z-10 opacity-80" />
            <FloralCorner className="fixed bottom-0 left-0 w-44 h-44 sm:w-64 sm:h-64 pointer-events-none z-10 opacity-80" flip />

            {/* 1. Welcome / Hero */}
            <Section id="welcome" className="pt-24 sm:pt-32 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex flex-col items-center"
              >
                <Ganesha className="w-20 h-20 mb-5 gentle-float" />
                <p className="font-cormorant text-gold text-sm tracking-[0.4em] uppercase mb-4">
                  The Wedding Of
                </p>
                <h1 className="font-vibes text-6xl sm:text-8xl text-burgundy leading-none">
                  {wedding.bride.name}
                </h1>
                <p className="font-cormorant text-3xl sm:text-4xl text-gold italic my-1">weds</p>
                <h1 className="font-vibes text-6xl sm:text-8xl text-burgundy leading-none">
                  {wedding.groom.name}
                </h1>
                <div className="gold-divider mt-8 max-w-xs">
                  <Sparkles className="w-4 h-4 text-gold" />
                </div>
                <p className="font-cormorant text-dark-brown/80 text-lg sm:text-xl mt-6 italic max-w-md">
                  With immense joy and the blessings of our elders, we invite you to celebrate our union.
                </p>
              </motion.div>
            </Section>

            {/* 2 & 4. Bride & Groom + Parents */}
            <Section id="couple">
              <SectionTitle kicker="The Couple" title="Bride & Groom" />
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-10 mt-10 max-w-3xl mx-auto">
                {[
                  { ...wedding.bride, role: 'Bride' },
                  { ...wedding.groom, role: 'Groom' },
                ].map((person, i) => (
                  <motion.div
                    key={person.role}
                    className="luxe-card rounded-2xl p-8 text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.15 }}
                  >
                    <div
                      className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-5"
                      style={{ background: 'linear-gradient(135deg, #6b1f2a, #4a141d)', border: '1px solid #c9a55a' }}
                    >
                      <span className="font-vibes text-3xl text-gold-light">{person.name[0]}</span>
                    </div>
                    <p className="font-cormorant text-gold text-xs tracking-[0.3em] uppercase mb-2">{person.role}</p>
                    <h3 className="font-vibes text-4xl text-burgundy mb-4">{person.name}</h3>
                    <div className="gold-divider my-4 max-w-[160px] mx-auto">
                      <span className="text-gold text-xs">❦</span>
                    </div>
                    <p className="font-cormorant text-dark-brown/70 text-sm mb-1">Son/Daughter of</p>
                    <p className="font-playfair text-burgundy text-base mt-1">{person.parents.father}</p>
                    <p className="font-cormorant text-dark-brown/70 text-sm">&amp; {person.parents.mother}</p>
                    {person.parents.address && (
                      <p className="font-cormorant text-dark-brown/60 text-xs mt-3 leading-relaxed">
                        {person.parents.address}
                      </p>
                    )}
                    {person.parents.mobile && (
                      <p className="font-cormorant text-dark-brown/60 text-xs mt-1">
                        Mobile: {person.parents.mobile}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </Section>

            {/* 3. Invitation Message */}
            <Section id="message">
              <SectionTitle kicker="With Blessings" title="Invitation" />
              <motion.p
                className="font-cormorant text-lg sm:text-2xl text-dark-brown/85 text-center italic max-w-2xl mx-auto mt-8 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                {wedding.message}
              </motion.p>
            </Section>

            {/* 5 & 6. Date & Countdown */}
            <Section id="datetime">
              <SectionTitle kicker="Save the Date" title="The Auspicious Day" />
              <motion.div
                className="flex flex-col items-center mt-10 gap-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="luxe-card rounded-2xl px-8 py-6 text-center">
                  <div className="flex items-center gap-2 justify-center text-burgundy mb-2">
                    <Calendar className="w-5 h-5 text-gold" />
                    <span className="font-playfair text-lg sm:text-xl">{wedding.dateLabel}</span>
                  </div>
                  <p className="font-cormorant text-gold text-sm tracking-[0.2em] uppercase">
                    {wedding.hinduDate}
                  </p>
                </div>
                <div className="luxe-card rounded-2xl px-8 py-5 text-center">
                  <div className="flex items-center gap-2 justify-center text-burgundy">
                    <Clock className="w-5 h-5 text-gold" />
                    <span className="font-playfair text-lg sm:text-xl">{wedding.muhoortham}</span>
                  </div>
                  <p className="font-cormorant text-gold text-xs tracking-[0.3em] uppercase mt-1">Muhoortham</p>
                </div>
                <div className="mt-4">
                  <Countdown target={wedding.date} />
                </div>
              </motion.div>
            </Section>

            {/* 7 & 8 & 9. Venue + Maps + QR */}
            <Section id="venue">
              <SectionTitle kicker="The Venue" title="Where We Gather" />
              <motion.div
                className="luxe-card rounded-2xl p-8 sm:p-10 max-w-2xl mx-auto mt-10 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <MapPin className="w-8 h-8 text-gold mx-auto mb-4" />
                <h3 className="font-playfair text-2xl sm:text-3xl text-burgundy mb-3">{wedding.venue.name}</h3>
                <p className="font-cormorant text-dark-brown/75 text-base sm:text-lg leading-relaxed max-w-md mx-auto">
                  {wedding.venue.address}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <motion.a
                    href={wedding.venue.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-cormorant text-base tracking-[0.15em] uppercase text-ivory"
                    style={{ background: 'linear-gradient(135deg, #6b1f2a 0%, #4a141d 100%)', border: '1px solid #c9a55a' }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Navigation className="w-4 h-4 text-gold-light" /> Open in Google Maps
                  </motion.a>
                </div>

                <div className="mt-8 flex flex-col items-center">
                  <p className="font-cormorant text-gold text-xs tracking-[0.3em] uppercase mb-3">
                    Scan to Navigate
                  </p>
                  <QRCode value={wedding.venue.mapsUrl} size={150} />
                </div>
              </motion.div>
            </Section>

            {/* 10. Gallery */}
            <Section id="gallery">
              <SectionTitle kicker="Cherished Moments" title="Gallery" />
              <div className="mt-10">
                <Gallery images={wedding.gallery} />
              </div>
            </Section>

            {/* 11. Schedule */}
            <Section id="schedule">
              <SectionTitle kicker="The Day's Flow" title="Wedding Schedule" />
              <div className="max-w-2xl mx-auto mt-10 space-y-4">
                {wedding.schedule.map((item, i) => (
                  <motion.div
                    key={item.title}
                    className="luxe-card rounded-xl p-5 sm:p-6 flex gap-4 items-start"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    <div
                      className="flex flex-col items-center justify-center min-w-[64px] px-3 py-2 rounded-lg"
                      style={{ background: 'linear-gradient(135deg, #6b1f2a, #4a141d)' }}
                    >
                      <span className="font-playfair text-gold-light text-sm sm:text-base font-semibold">
                        {item.time}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-playfair text-lg sm:text-xl text-burgundy font-semibold">{item.title}</h4>
                      <p className="font-cormorant text-dark-brown/70 text-sm sm:text-base mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Section>

            {/* 12 & 13 & 14. RSVP + WhatsApp + Instagram */}
            <Section id="rsvp">
              <SectionTitle kicker="Kindly Respond" title="RSVP" />
              <motion.div
                className="luxe-card rounded-2xl p-8 max-w-xl mx-auto mt-10 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="font-cormorant text-dark-brown/80 text-lg italic mb-6">
                  Your presence would make our celebration complete. Kindly let us know if you will grace the occasion.
                </p>

                <motion.a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setRsvpDone(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-cormorant text-lg tracking-[0.15em] uppercase text-ivory"
                  style={{ background: 'linear-gradient(135deg, #6b1f2a 0%, #4a141d 100%)', border: '1px solid #c9a55a' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {rsvpDone ? <Check className="w-5 h-5 text-gold-light" /> : <Heart className="w-5 h-5 text-gold-light" />}
                  {rsvpDone ? 'Confirmed' : 'Confirm Attendance'}
                </motion.a>

                <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                  <motion.a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-cormorant text-sm tracking-[0.1em] uppercase text-ivory"
                    style={{ background: '#25D366' }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp Us
                  </motion.a>
                  <motion.a
                    href={wedding.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-cormorant text-sm tracking-[0.1em] uppercase text-ivory"
                    style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)' }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Instagram className="w-4 h-4" /> Instagram
                  </motion.a>
                </div>
              </motion.div>
            </Section>

            {/* Sharing Happiness (sisters) */}
            <Section id="sharing">
              <SectionTitle kicker="Sharing Happiness" title="With Love" />
              <motion.div
                className="text-center mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="font-cormorant text-dark-brown/80 text-lg italic mb-2">
                  Sharing happiness on this auspicious occasion
                </p>
                <p className="font-vibes text-4xl text-burgundy">{wedding.sharingHappiness}</p>
              </motion.div>
            </Section>

            {/* Share */}
            <Section id="share">
              <SectionTitle kicker="Spread the Joy" title="Share This Invitation" />
              <div className="mt-8">
                <ShareBar />
              </div>
            </Section>

            {/* 15. Thank You */}
            <Section id="thankyou" className="pb-32">
              <motion.div
                className="text-center max-w-xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div
                  className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 gentle-float"
                  style={{ background: 'linear-gradient(135deg, #6b1f2a, #4a141d)', border: '1px solid #c9a55a' }}
                >
                  <span className="font-vibes text-3xl text-gold-light">T&amp;N</span>
                </div>
                <h2 className="font-vibes text-5xl sm:text-6xl text-burgundy mb-4">Thank You</h2>
                <p className="font-cormorant text-dark-brown/80 text-lg sm:text-xl italic leading-relaxed">
                  For being a part of our story. Your blessings and presence are the greatest gifts we could receive as we begin this beautiful journey together.
                </p>
                <div className="gold-divider mt-8 max-w-xs mx-auto">
                  <span className="text-gold text-lg">❦</span>
                </div>
                <p className="font-vibes text-3xl text-burgundy mt-6">
                  {wedding.bride.name} &amp; {wedding.groom.name}
                </p>
                <p className="font-cormorant text-gold text-xs tracking-[0.3em] uppercase mt-2">
                  #{wedding.hashtag}
                </p>
              </motion.div>
            </Section>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
