import React from 'react';

import { SpinnerContainer } from './spinner.styled';

export default function Spinner(): React.ReactElement {
  return (
    <SpinnerContainer width="100%" height="100%" viewBox="25 25 50 50">
      <defs>
        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#bd0f721a" />
          <stop offset="30%" stopColor="#bd0f7280" />
          <stop offset="50%" stopColor="#bd0f72b3" />
          <stop offset="100%" stopColor="#BD0F72" />
        </linearGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="20"
        fill="transparent"
        stroke="#FEF1F8"
        strokeWidth="5"
        strokeDashoffset="0"
        strokeDasharray="200 200"
      />
      <circle
        id="loader"
        cx="50"
        cy="50"
        r="20"
        fill="none"
        stroke={'url("#linear")'}
        strokeWidth="5"
      />
    </SpinnerContainer>
  );
}
