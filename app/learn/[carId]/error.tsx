'use client'; // Error components must be Client components

import { useEffect } from 'react';
import { ErrorComponent } from '../../../src/utilsHelpers/errorComponent';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <ErrorComponent reset={reset}/>
  );
}