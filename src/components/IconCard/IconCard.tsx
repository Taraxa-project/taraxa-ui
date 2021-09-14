import React from "react";
import { Card as MCard, CardProps as MCardProps, CardActions, CardContent, CssBaseline, ThemeProvider, Typography } from '@material-ui/core';
import theme from "../theme";
import Button from "../Button";
import useStyles from './iconcard-styles';
import Font from "react-font";


export interface IconCardProps extends MCardProps {
  description: string;
  onClickButton?:  React.MouseEventHandler<HTMLButtonElement> | undefined;
  onClickText?: string;
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  tooltip?: JSX.Element;
};



const IconCard = ({
  title,
  description,
  onClickButton,
  onClickText,
  Icon,
  id,
  tooltip
}: IconCardProps) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MCard className={classes.root} id={id} elevation={0} variant="outlined">
        <CardContent>
        {tooltip && Icon ? <div className={classes.tooltipIcon}>{tooltip}</div> : <div className={classes.noIconTooltipIcon}>{tooltip}</div>}
          {Icon && <div className={classes.icon}><Icon/></div>}
          <Typography color="primary" variant="h5" component="h5" className={classes.bottomSpacing}>
            <Font family="Poppins"><>{title}</></Font>
          </Typography>
            <Typography className={classes.label} variant="body1" color="primary">
              <Font family="Inter"><span>{description}</span></Font>
            </Typography>
        </CardContent>
        {onClickButton && onClickText && 
          <CardActions className={classes.actions}>
            <Button disableElevation color="secondary" onClick={onClickButton} variant="contained" label={onClickText} size="small"></Button>
          </CardActions>}
      </MCard>
    </ThemeProvider>
  );
}

export default IconCard;