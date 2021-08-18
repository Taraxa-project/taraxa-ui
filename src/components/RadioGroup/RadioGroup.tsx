import React from "react";
import { RadioGroup as MRadioGroup, CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from "../theme";

export interface RadioGroupProps  {
  name?: string;
  ariaLabel?: string;
  id?: string;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined;
  value?: any;
  children: JSX.Element;
  row?: boolean;
};

const RadioGroup = ({
  name,
  ariaLabel,
  onChange,
  id,
  className,
  value,
  row,
  children
}: RadioGroupProps) => {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <MRadioGroup
      onChange={onChange}
      name={name}
      aria-label={ariaLabel}
      id={id}
      className={className}
      value={value}
      row={row}
      >
        {children}
      </MRadioGroup>
    </ThemeProvider>
  );
};

export default RadioGroup;