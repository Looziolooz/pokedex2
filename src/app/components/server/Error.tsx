'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="content-grid py-16 text-center min-h-[60vh] flex flex-col justify-center">
      <div className="mb-8">
        <div className="text-8xl mb-6">⚡</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Oops! Something went wrong!
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          A wild error appeared! Don`&apos;`t worry, we`&apos;`re working to fix it.
        </p>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-lg mx-auto mb-8">
        <h3 className="font-semibold text-red-800 mb-2">Error Details:</h3>
        <p className="text-sm text-red-600 font-mono bg-red-100 p-3 rounded">
          {error.message || 'An unexpected error occurred'}
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={reset}
          className="btn-primary"
        >
          🔄 Try Again
        </button>
        <Link href="/" className="btn-primary">
          🏠 Go Home
        </Link>
        <Link href="/pokedex" className="btn-primary">
          📖 Browse Pokédex
        </Link>
      </div>
      
      <div className="mt-8 text-sm text-gray-400">
        <p>If the problem persists, try refreshing the page or contact support.</p>
      </div>
    </div>
  );
}