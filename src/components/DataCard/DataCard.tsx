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
  onClickButton?:  React.MouseEventHandler<HTMLButtonElement> | undefined;
  onClickText?: string;
  dataOptions?: JSX.Element;
};



const DataCard = ({
  title,
  description,
  onClickButton,
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
            <Typography variant="body1" className={classes.label} color="primary">
              {description}
            </Typography>
          <Typography color="primary" variant="h4" component="h4" className={classes.bottomSpacing}>
         {title}
          </Typography>
          {label && <Font family='Inter'>
            <Typography className={classes.label} variant="body2" color="textSecondary">
             {label}
            </Typography>
          </Font>
          }
        </CardContent>
        {input && input}
        {dataOptions && dataOptions}
        {onClickButton && onClickText && 
          <CardActions className={classes.actions}>
            <Button disableElevation color="secondary" disabled={disabled} onClick={onClickButton} variant="contained" label={onClickText} size="medium"></Button>
          </CardActions>}
      </MCard>
    </ThemeProvider>
  );
}

export default DataCard;