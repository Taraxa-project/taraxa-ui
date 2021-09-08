import React from "react";
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import MToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { ToggleButtonGroupProps } from '@material-ui/lab';
import theme from "../theme";
import useStyles from "./togglebutton-styles";

export interface ToggleButtonProps extends ToggleButtonGroupProps {
  currentValue: string;
  data: {value: string, label: string}[];
};


const ToggleButton = ({
  exclusive,
  onChange,
  orientation,
  size,
  currentValue,
  data,
  className
}: ToggleButtonProps) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <ToggleButtonGroup
      value={currentValue}
      onChange={onChange}
      exclusive={exclusive}
      size={size}
      orientation={orientation}
      className={className}
    >
      {data.map((button, index) => (
        <MToggleButton className={button.value === currentValue ? classes.selected : classes.button} value={button.value}>
          {button.label}
        </MToggleButton>
      ))}
    </ToggleButtonGroup>
    </ThemeProvider>
  );
};

export default ToggleButton;