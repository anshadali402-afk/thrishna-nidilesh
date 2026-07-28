'use client';

import { useEffect, useState } from 'react';

type Petal = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
  drift: number;
};

const colors = ['#b76e79', '#c9a55a', '#e3c98b', '#d9a0a8', '#6b1f2a'];

export default function Petals({ count = 18 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const arr: Petal[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 10 + Math.random() * 12,
      size: 10 + Math.random() * 14,
      color: colors[i % colors.length],
      drift: (Math.random() - 0.5) * 120,
    }));
    setPetals(arr);
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute top-0"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.6,
            background: p.color,
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            opacity: 0.7,
            transform: 'rotate(45deg)',
            animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
            ['--drift' as string]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
