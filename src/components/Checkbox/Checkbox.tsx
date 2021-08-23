import React from "react";
import { Checkbox as MCheckbox, CssBaseline, ThemeProvider, CheckboxProps as MCheckboxProps } from '@material-ui/core';
import theme from "../theme";

export interface CheckboxProps extends MCheckboxProps  {};

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