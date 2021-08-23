import React from "react";
import { TextField, StandardTextFieldProps, FilledTextFieldProps, OutlinedTextFieldProps, CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from "../theme";
import Font from "react-font";



export interface InputFieldProps extends StandardTextFieldProps, FilledTextFieldProps, OutlinedTextFieldProps {
  min?: number;
  max?: number;
};




const InputField = ({ label, id, color, defaultValue, disabled, fullWidth, margin, multiline, onChange, required, placeholder, size, value, variant, className, type, max, min }: InputFieldProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TextField label={label} id={id} variant={variant} color={color} defaultValue={defaultValue} disabled={disabled} fullWidth={fullWidth} margin={margin} multiline={multiline} required={required} placeholder={placeholder} size={size} value={value} onChange={onChange} className={className} type={type} 
      InputProps={max && min ? {
        inputProps: { 
            max: max, min: min 
        }
      } : undefined} />
    </ThemeProvider>
  );
}

export default InputField;