import React from "react";
import "./button.css";
import { Button as MButton, CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from "../theme";
import Font from "react-font";

export interface ButtonProps  {
  color?: "inherit" | "primary" | "secondary" | "default" | undefined;
  disabled?: boolean;
  label?: string;
  size?: "small" | "medium" | "large";
  variant? : 'contained' | 'outlined' | 'text';
  disableElevation?: boolean;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  fullWidth?: boolean;
  id?: string;
  className?: string;
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

const Button = ({
  color,
  disabled,
  onClick,
  label,
  size,
  variant,
  disableElevation,
  fullWidth,
  id,
  className,
  Icon
}: ButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <MButton 
        color={color}
        disabled={disabled} 
        onClick={onClick} 
        size={size} 
        variant={variant}
        fullWidth={fullWidth}
        disableElevation={disableElevation}
        id={id}
        className={className}
        >
        {Icon && <Icon />}
        {label && <Font family='Inter'><span>{label}</span></Font>}
      </MButton>
    </ThemeProvider>
  );
};

export default Button;