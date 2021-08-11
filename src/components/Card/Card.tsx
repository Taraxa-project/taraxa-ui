import React from "react";
import { Card as MCard, CardActions, CardContent, CssBaseline, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import theme from "../theme";
import Font from "react-font";
import Button from "../Button";



export interface CardProps  {
  title: string;
  description: string;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onClickText?: string;
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
};

const useStyles = makeStyles({
  root: {
    width: 250,
    minHeight: 125,
    textAlign: "left",
    backgroundColor: '#282C3E',
    paddingLeft: "2%",
    paddingRight: "1%",
  },
  label: {
    fontSize: 12,
    marginTop: "5%",
    marginBottom: "5%"
  },
  actions: {
    display: "grid",
    paddingLeft: '2%',
    paddingRight: '8%',
    marginBottom: "5%"
  }
});

const Card = ({
  title,
  description,
  onClick,
  onClickText,
  Icon
}: CardProps) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MCard className={classes.root} elevation={0} variant="outlined">
        <CardContent>
          {Icon && <Icon/>}
          <Typography color="primary" variant="h5" component="h5" gutterBottom>
          <Font family="Poppins"><span>{title}</span></Font>
          </Typography>
          <Font family='Inter'>
            <Typography className={classes.label} color="primary">
              <Font family="Inter"><span>{description}</span></Font>
            </Typography>
          </Font>
        </CardContent>
        {onClick && onClickText && 
          <CardActions className={classes.actions}>
            <Button disableElevation color="secondary" onClick={onClick} variant="contained" label={onClickText} size="small"></Button>
          </CardActions>}
      </MCard>
    </ThemeProvider>
  );
}

export default Card;