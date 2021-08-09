import React from "react";
import "./title.css";
import { CssBaseline, ThemeProvider, Typography } from "@material-ui/core";
import { Variant } from "@material-ui/core/styles/createTypography";
import theme from "../theme";
import Font from 'react-font'


export interface TitleProps  {
  label: string;
  variant: Variant;
  color: "inherit" | "initial" | "primary" | "secondary" | "textPrimary" | "textSecondary" | "error" | undefined;
};

const Title = ({
  label,
  variant,
  color
}: TitleProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Font family='Poppins'>
        <Typography variant={variant} color={color}>
          {label}
        </Typography>
      </Font>
    </ThemeProvider>
  );
};



export default Title;