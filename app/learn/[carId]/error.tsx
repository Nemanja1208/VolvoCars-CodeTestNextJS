'use client'; // Error components must be Client components

import { notFound } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({
  error,
}: {
  error: Error;
  reset?: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return notFound();
}