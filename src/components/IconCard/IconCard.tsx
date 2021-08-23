import React from "react";
import { Card as MCard, CardProps as MCardProps, CardActions, CardContent, CssBaseline, ThemeProvider, Typography } from '@material-ui/core';
import theme from "../theme";
import Font from "react-font";
import Button from "../Button";
import useStyles from './iconcard-styles';



export interface IconCardProps extends MCardProps {
  description: string;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onClickText?: string;
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
};



const IconCard = ({
  title,
  description,
  onClick,
  onClickText,
  Icon
}: IconCardProps) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MCard className={classes.root} elevation={0} variant="outlined">
        <CardContent>
          {Icon && <div className={classes.icon}><Icon/></div>}
          <Typography color="primary" variant="h5" component="h5" className={classes.bottomSpacing}>
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

export default IconCard;