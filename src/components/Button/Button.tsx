import React from "react";
import "./button.css";
import { Button as MButton, CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from "../theme";

export interface ButtonProps  {
  color?: "inherit" | "primary" | "secondary" | "default" | undefined;
  disabled?: boolean;
  label: string;
  size?: "small" | "medium" | "large";
  variant? : 'contained' | 'outlined' | 'text';
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const Button = ({
  color,
  disabled,
  onClick,
  label,
  size,
  variant
}: ButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <MButton 
        color={color} 
        disabled={disabled} 
        onClick={onClick} 
        size={size} 
        variant={variant}>{label}
      </MButton>
    </ThemeProvider>
  );
};

export default Button;