import React from "react";
import "./title.css";
import { CssBaseline, ThemeProvider, Typography } from "@material-ui/core";
import { Variant } from "@material-ui/core/styles/createTypography";
import theme from "../theme";


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
      <Typography variant={variant} color={color}>
        {label}
      </Typography>
    </ThemeProvider>
  );
};



export default Title;