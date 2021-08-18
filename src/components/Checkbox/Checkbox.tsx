import React from "react";
import { Checkbox as MCheckbox, CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from "../theme";

export interface CheckboxProps  {
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

const Checkbox = ({
  checked,
  name,
  color,
  disabled,
  onChange,
  id,
  className,
  value,
}: CheckboxProps) => {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <MCheckbox
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

export default Checkbox;