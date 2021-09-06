import React from "react";
import { Card as MCard, CardProps as MCardProps, CardActions, CardContent, CssBaseline, ThemeProvider, Typography } from '@material-ui/core';
import theme from "../theme";
import Font from "react-font";
import Button from "../Button";
import useStyles from './profilebasiccard-styles';



export interface ProfileBasicCardProps extends MCardProps  {
  Icon?:  React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  value?: string;
  description: string;
};



const ProfileBasicCard = ({
  Icon,
  title,
  value,
  description,
}: ProfileBasicCardProps) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MCard className={classes.root} elevation={0} variant="outlined">
        <CardContent>
            {Icon ? <Typography variant="body1" className={classes.label} color="primary">
              {<div className={classes.iconContainer}>
                <div className={classes.icon}><Icon /></div>
                {title}
                </div> }
            </Typography> : <Typography variant="body1" className={classes.label} color="primary">
              {title}
            </Typography>}
            {value && 
              <Typography variant="h4" className={classes.value} color="primary">
                {value}
              </Typography>
            }
              <Typography variant="body1" className={classes.description} color="textSecondary">
              {description}
            </Typography>     
        </CardContent>
        </MCard>
    </ThemeProvider>
  );
}

export default ProfileBasicCard;