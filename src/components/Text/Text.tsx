import React from "react";
import { CssBaseline, ThemeProvider, Typography, TypographyProps } from "@material-ui/core";
import { Variant } from "@material-ui/core/styles/createTypography";
import theme from "../theme";
import Font from 'react-font'


export interface TextProps extends TypographyProps {
  label: string;
};

const Text = ({
  label,
  variant,
  color,
  id,
  className,
  style
}: TextProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Typography variant={variant} color={color} id={id} className={className} style={style}>
          {label}
        </Typography>
    </ThemeProvider>
  );
};



export default Text;