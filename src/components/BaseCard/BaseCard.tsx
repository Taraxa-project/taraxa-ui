import React from "react";
import { Card as MCard, CardActions, CardContent, CssBaseline, ThemeProvider, Typography } from '@material-ui/core';
import theme from "../theme";
import Font from "react-font";
import Button from "../Button";
import useStyles from './basecard-styles';

export interface BaseCardProps  {
  title: string;
  description: string;
};

const BaseCard = ({
  title,
  description,
}: BaseCardProps) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MCard className={classes.root} elevation={0} variant="outlined">
        <CardContent>
          <Typography color="primary" variant="h4" component="h4" className={classes.bottomSpacing}>
          <Font family="Poppins"><span>{title}</span></Font>
          </Typography>
          <Font family='Inter'>
            <Typography className={classes.label} variant="h5" color="primary">
              <Font family="Inter"><span>{description}</span></Font>
            </Typography>
          </Font>
        </CardContent>
      </MCard>
    </ThemeProvider>
  );
}

export default BaseCard;