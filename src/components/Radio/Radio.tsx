import React from "react";
import { Radio as MRadio, CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from "../theme";

export interface RadioProps  {
  color?:'default'
  | 'primary'
  | 'secondary';
  disabled?: boolean;
  name?: string;
  checked: boolean;
  id?: string;
  className?: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined;
  value?: any;
};

const Radio = ({
  checked,
  name,
  color,
  disabled,
  onChange,
  id,
  className,
  value,
}: RadioProps) => {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <MRadio
      checked={checked}
      onChange={onChange}
      name={name}
      id={id}
      className={className}
      disabled={disabled}
      color={color}
      value={value}
      />
    </ThemeProvider>
  );
};

export default Radio;