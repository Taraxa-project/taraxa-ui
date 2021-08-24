import React from "react";
import "./button.css";
import { Button as MButton, CssBaseline, ThemeProvider, ButtonProps as MButtonProps, Typography } from '@material-ui/core';
import theme from "../theme";
import Font from "react-font";

export interface ButtonProps extends MButtonProps {
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  label?: string;
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
        {label && label}
      </MButton>
    </ThemeProvider>
  );
};

export default Button;