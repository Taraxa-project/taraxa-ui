import React from "react";
import { Card as MCard, CardProps as MCardProps, CardActions, CardContent, CssBaseline, ThemeProvider, Typography } from '@material-ui/core';
import theme from "../theme";
import Font from "react-font";
import Button from "../Button";
import useStyles from './profilecard-styles';



export interface ProfileCardProps extends MCardProps  {
  Icon?:  React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  username: string;
  email: string;
  wallet?: string;
  buttonOptions?: JSX.Element;
};



const ProfileCard = ({
  Icon,
  username,
  email,
  wallet,
  buttonOptions
}: ProfileCardProps) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MCard className={classes.root} elevation={0} variant="outlined">
        <CardContent>
            <div className={classes.userDetails}>{Icon && <div className={classes.iconContainer}><Icon /></div>}
              <Font family="Inter">
                <Typography variant="body1" className={classes.label} color="primary">
                  {username}
                </Typography>
                <Typography variant="body2" className={classes.label} color="textSecondary">
                  {email}
                </Typography>
              </Font>
            </div>
            {wallet && 
              <>
                <Typography variant="body2" className={classes.label} color="textSecondary">
                  TARA address (ERC20):
                </Typography>
                <Typography variant="body1" className={classes.label} color="primary">
                  {wallet}
                </Typography>
              </>
            } 
        </CardContent>
          {buttonOptions && buttonOptions}
        </MCard>
    </ThemeProvider>
  );
}

export default ProfileCard;