import styled from 'styled-components';

export const SpinnerContainer = styled.svg`
  animation: rotate 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;

  #loader {
    stroke-dasharray: 150, 200;
    stroke-dashoffset: -10;
    animation: dash 2s ease-in-out infinite;
    stroke-linecap: round;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
