import React from "react";
import { Card as MCard, CardContent, CssBaseline, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import theme from "../theme";
import Font from "react-font";


export interface CardProps  {
  label: string;
  value: string;
};

const useStyles = makeStyles({
  root: {
    minWidth: 225,
    minHeight: 125,
    textAlign: "center",
    backgroundColor: '#F2F2F2',
  },
  label: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Inter',
  },
  pos: {
    marginBottom: 12,
  },
});

const Card = ({
  value,
  label,
}: CardProps) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MCard className={classes.root} elevation={0} variant="outlined">
        <CardContent>
          <Typography color="textSecondary" variant="h4" component="h4" gutterBottom>
            {value}
          </Typography>
          <Font family='Inter'>
            <Typography className={classes.label} color="textSecondary">
              {label}
            </Typography>
          </Font>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </MCard>
    </ThemeProvider>
  );
}

export default Card;