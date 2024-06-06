import React from 'react';
import { Spinner } from '@/presentation/atoms';

export function LoadingIndicator(): React.ReactElement {
  return (
    <div className="w-8">
      <Spinner />
    </div>
  );
}
