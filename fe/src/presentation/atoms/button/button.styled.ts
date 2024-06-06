import React, { AllHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface IButtonContainerProps {
  type: 'button' | 'submit' | 'reset';
  bgColor?: string;
  fontColor?: string;
  width?: string;
  background?: string;
  spacing?: string;
  disabled?: boolean;
}
export interface IButtonProps extends AllHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactElement;
  type: 'button' | 'submit' | 'reset';
  bgColor?: string;
  fontColor?: string;
  width?: string;
  background?: string;
  spacing?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const ButtonContainer = styled.button<IButtonContainerProps>`
  color: ${({ disabled, fontColor }) => (disabled ? '' : fontColor ?? 'white')};
`;
