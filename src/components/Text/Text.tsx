import React from "react";
import "./text.css";
import { CssBaseline, ThemeProvider, Typography } from "@material-ui/core";
import { Variant } from "@material-ui/core/styles/createTypography";
import theme from "../theme";
import Font from 'react-font'


export interface TextProps  {
  label: string;
  variant: Variant;
  color: "inherit" | "initial" | "primary" | "secondary" | "textPrimary" | "textSecondary" | "error" | undefined;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
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