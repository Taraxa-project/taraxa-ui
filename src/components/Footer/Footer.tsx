import BottomNavigation from '@material-ui/core/BottomNavigation';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ChatIcon from '@material-ui/icons/Chat';
import SendIcon from '@material-ui/icons/Send';
import React from 'react';
import theme from '../theme';
import { BottomNavigationAction, BottomNavigationActionProps as MBottomNavigationActionProps, CssBaseline, ThemeProvider } from '@material-ui/core';
import Text from '../Text';
import useStyles from './footer-styles';


export interface FooterProps extends MBottomNavigationActionProps  {
  items: { label: string; value: string; icon: "twitter" | "facebook" | "instagram" | "recent" | "favorite" | "location" | "discord" | "send"}[];
  showLabels: boolean;
  description?: string;
  title: string;
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  links?: { label: string; }[];
};

const Footer = ({
  items,
  showLabels,
  description,
  links,
  title,
  Icon
}: FooterProps) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.footer}>
        <div className={classes.logo}>
          {Icon && <><Icon/><div style={{width: '20px'}}/> </>} <Text label={title} variant="h4" color="primary"/>
        </div>
        {description && <div className={classes.description}>
          <Text label={description} variant="body1" color="textSecondary" style={{ textAlign: 'left'}}/>
        </div>}
        <BottomNavigation showLabels={showLabels} className={classes.bottomNavigation}>
          {items.map((item) => (
            <BottomNavigationAction className={classes.bottomNavigationItem} label={item.label} value={item.value} icon={GetIcon(item.icon)} />
          ))}
        </BottomNavigation>
        {links && 
          <div className={classes.footerList}>
            {links.map((link, index) => (
              <Text label={link.label} variant="body1" color="textSecondary" className={classes.footerParagraph}/>
          ))}
          </div>
        }
      </div>
    </ThemeProvider>
  )
}

const GetIcon = (name: string) => {
  switch (name) {
    case "twitter":
        return <TwitterIcon/>
      break;
    case "facebook":
        return <FacebookIcon/>
    case "instagram":
        return <InstagramIcon/>
    case "recent":
        return <RestoreIcon/>
    case "favorite":
        return <FavoriteIcon/>
    case "location": 
        return <LocationOnIcon/>
    case "discord":
        return <ChatIcon/>
    case "send":
        return <SendIcon/>
    default:
      break;
  }
}

export default Footer;