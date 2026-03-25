'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function BookedPage() {
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'appointment_booked', {
        send_to: 'G-PGWCHZ95J9',
      });
    }
  }, []);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center px-6"
      style={{ background: 'var(--bg)' }}
    >
      {/* Success icon */}
      <div
        className="mb-8 flex h-20 w-20 items-center justify-center rounded-full"
        style={{
          background: 'rgba(255,107,43,0.12)',
          boxShadow: '0 0 40px rgba(255,107,43,0.2)',
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FF6B2B"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      {/* Headline */}
      <h1
        className="mb-4 text-center text-4xl font-bold tracking-tight sm:text-5xl"
        style={{ fontFamily: 'var(--font-display)', color: '#fff' }}
      >
        You&rsquo;re all set!
      </h1>

      {/* Subtext */}
      <p
        className="mb-10 max-w-md text-center text-lg leading-relaxed"
        style={{ color: 'rgba(255,255,255,0.6)' }}
      >
        Aria has confirmed your appointment. Check your calendar for the details.
      </p>

      {/* CTA */}
      <a
        href="https://neuralflowai.io"
        className="rounded-full px-8 py-3 text-sm font-semibold text-white transition-shadow hover:shadow-lg"
        style={{
          background: '#FF6B2B',
          boxShadow: '0 0 20px rgba(255,107,43,0.35)',
        }}
      >
        Back to Home
      </a>
    </main>
  );
}
