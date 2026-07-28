'use client';

type Props = {
  className?: string;
};

export default function Ganesha({ className = '' }: Props) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      {/* Aura / halo */}
      <circle cx="50" cy="42" r="30" fill="none" stroke="#c9a55a" strokeWidth="0.8" opacity="0.5" />
      <circle cx="50" cy="42" r="34" fill="none" stroke="#c9a55a" strokeWidth="0.5" opacity="0.3" />

      {/* Crown */}
      <path d="M50 12 L44 20 L50 16 L56 20 Z" fill="#c9a55a" />
      <circle cx="50" cy="12" r="1.5" fill="#c9a55a" />

      {/* Head */}
      <ellipse cx="50" cy="38" rx="16" ry="18" fill="#6b1f2a" />
      {/* Forehead tilaka */}
      <path d="M50 28 L48 34 L52 34 Z" fill="#c9a55a" />
      <circle cx="50" cy="40" r="2" fill="#c9a55a" opacity="0.6" />

      {/* Ears (large, fan-like) */}
      <path d="M34 38 C 28 38, 26 30, 30 24 C 34 26, 36 32, 34 38 Z" fill="#6b1f2a" />
      <path d="M66 38 C 72 38, 74 30, 70 24 C 66 26, 64 32, 66 38 Z" fill="#6b1f2a" />

      {/* Tusks */}
      <path d="M44 50 Q 40 54, 42 58" stroke="#e3c98b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M56 50 Q 60 54, 58 58" stroke="#e3c98b" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Trunk curling to the left */}
      <path
        d="M50 46 C 48 52, 44 56, 40 54 C 36 52, 38 48, 42 50 C 44 51, 46 49, 45 46"
        fill="#6b1f2a"
        stroke="#4a141d"
        strokeWidth="0.6"
      />

      {/* Body / belly */}
      <ellipse cx="50" cy="68" rx="20" ry="16" fill="#6b1f2a" />

      {/* Lotus base */}
      <path d="M30 84 Q 50 78, 70 84 Q 50 90, 30 84 Z" fill="#c9a55a" opacity="0.7" />
      <path d="M36 86 Q 50 82, 64 86" stroke="#c9a55a" strokeWidth="0.8" fill="none" />

      {/* Arms holding modak */}
      <circle cx="38" cy="62" r="4" fill="#6b1f2a" />
      <circle cx="38" cy="62" r="2" fill="#e3c98b" opacity="0.6" />

      {/* Bottom lotus petals */}
      <path d="M28 88 Q 24 92, 28 94 Q 32 92, 30 88 Z" fill="#c9a55a" opacity="0.5" />
      <path d="M72 88 Q 76 92, 72 94 Q 68 92, 70 88 Z" fill="#c9a55a" opacity="0.5" />
      <path d="M50 90 Q 46 94, 50 96 Q 54 94, 50 90 Z" fill="#c9a55a" opacity="0.6" />
    </svg>
  );
}
