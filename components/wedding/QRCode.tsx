'use client';

import { useEffect, useState } from 'react';

type Props = {
  value: string;
  size?: number;
};

export default function QRCode({ value, size = 160 }: Props) {
  const [src, setSrc] = useState('');

  useEffect(() => {
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(
      value
    )}&color=6b1f2a&bgcolor=fffdf9&margin=10`;
    setSrc(url);
  }, [value, size]);

  return (
    <div
      className="p-3 rounded-lg"
      style={{ background: '#fffdf9', border: '1px solid rgba(201,165,90,0.5)' }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="QR code to venue" width={size} height={size} />
      ) : (
        <div style={{ width: size, height: size }} className="animate-pulse bg-cream rounded" />
      )}
    </div>
  );
}
