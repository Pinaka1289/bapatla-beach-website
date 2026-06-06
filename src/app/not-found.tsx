import Link from 'next/link';
import { Waves } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)] px-4">
      <div className="text-center">
        <Waves size={64} className="mx-auto text-ocean-400 mb-6" />
        <h1 className="text-6xl font-bold text-ocean-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
          Page Not Found
        </h2>
        <p className="text-[var(--text-secondary)] mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist. The tide may have washed it away!
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-ocean-600 hover:bg-ocean-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-ocean-500/25"
        >
          Back to Beach
        </Link>
      </div>
    </div>
  );
}
