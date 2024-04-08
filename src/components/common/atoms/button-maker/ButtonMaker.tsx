import React from "react";
import { Button, ButtonProps } from "reactstrap";

interface IButtonMakerProps extends Omit<ButtonProps, "cssModule" | "color"> {
  children?: string | React.ReactNode;
  text?: string;
  className?: string;
  size?: "sm" | "lg";
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
}
const ButtonMaker = (props: IButtonMakerProps) => {
  const {
    block = false,
    children,
    color = "primary",
    outline,
    text,
    className,
    size,
    close = false,
    active,
    onClick,
    disabled = false,
    type,
    ...rest
  } = props;
  return (
    <Button
      disabled={disabled}
      size={size}
      className={className}
      outline={outline}
      color={color}
      block={block}
      close={close}
      active={active}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {text}
      {children}
    </Button>
  );
};

export default ButtonMaker;
