import { Button as ButtonBase } from "@mui/base";
import { ReactNode } from "react";

interface Props {
  children: JSX.Element | string;
  className?: string;
  disabled?: boolean;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  endIcon?: ReactNode;
  type: "button" | "submit" | "reset";
  component?: any;
  onClick?: () => void;
}

function Button({ children, className, component = "button", ...rest }: Props) {
  return (
    <ButtonBase {...rest} className={className}>
      {children}
    </ButtonBase>
  );
}

export default Button;
