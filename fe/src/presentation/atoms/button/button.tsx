import {
  ButtonContainer,
  IButtonProps,
  IButtonContainerProps,
} from './button.styled';

export default function Button(props: IButtonProps) {
  return (
    <ButtonContainer
      onClick={props.onClick}
      {...(props as IButtonContainerProps)}
    >
      {props.children}
    </ButtonContainer>
  );
}
