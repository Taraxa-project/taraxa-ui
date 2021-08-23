import React from "react";
import { Card as MCard, CardProps as MCardProps, CardActions, CardContent, CssBaseline, ThemeProvider, Typography } from '@material-ui/core';
import theme from "../theme";
import Font from "react-font";
import Button from "../Button";
import useStyles from './datacard-styles';



export interface DataCardProps extends MCardProps  {
  description: string;
  label?: string;
  input: JSX.Element;
  disabled?: boolean;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onClickText?: string;
  dataOptions?: JSX.Element;
};



const DataCard = ({
  title,
  description,
  onClick,
  onClickText,
  input,
  disabled,
  label,
  dataOptions,
}: DataCardProps) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MCard className={classes.root} elevation={0} variant="outlined">
        <CardContent>
          <Font family='Inter'>
            <Typography variant="body1" className={classes.label} color="primary">
              <Font family="Inter"><span>{description}</span></Font>
            </Typography>
          </Font>
          <Typography color="primary" variant="h3" component="h3" className={classes.bottomSpacing}>
          <Font family="Poppins"><span>{title}</span></Font>
          </Typography>
          {label && <Font family='Inter'>
            <Typography className={classes.label} variant="body2" color="textSecondary">
              <Font family="Inter"><span>{label}</span></Font>
            </Typography>
          </Font>
          }
        </CardContent>
        {input && input}
        {dataOptions && dataOptions}
        {onClick && onClickText && 
          <CardActions className={classes.actions}>
            <Button disableElevation color="secondary" disabled={disabled} onClick={onClick} variant="contained" label={onClickText} size="medium"></Button>
          </CardActions>}
      </MCard>
    </ThemeProvider>
  );
}

export default DataCard;