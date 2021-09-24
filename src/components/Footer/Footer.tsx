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
import { useMediaQuery } from 'react-responsive';


export interface FooterProps extends MBottomNavigationActionProps {
  items: { label: string; Icon: JSX.Element }[];
  description?: string;
  title: string;
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  links?: { link: string; label: string; }[];
};

const Footer = ({
  items,
  description,
  links,
  title,
  Icon
}: FooterProps) => {
  const classes = useStyles();
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.footer}>
        <div className={isMobile ? classes.logoMobile : classes.logo}>
          {Icon && <div className={isMobile ? classes.footerSVGMobile : classes.footerSVG}><Icon /></div>} <Text className={isMobile ? classes.logoTextMobile : classes.logoText} label={title} variant="h4" color="primary" />
          {items && !isMobile && <ul className={classes.footerUl}>
            {items.map((item) => (
              <li className={classes.footerLi}>{item.Icon}</li>
            ))}
          </ul>
          }
        </div>
        {description && <div className={isMobile ? classes.descriptionMobile : classes.description}>
          <Text label={description} variant="body1" color="textSecondary" style={{ textAlign: 'left' }} />
        </div>}
        {isMobile && items && <div className={classes.mobileIcons}>
          <ul className={classes.mobileFooterUL}>
            {items.map((item) => (
              <li className={classes.footerLi}>{item.Icon}</li>
            ))}
          </ul>
        </div>
        }
        {/* <BottomNavigation showLabels={showLabels} className={classes.bottomNavigation}>
          {items.map((item) => (
            <BottomNavigationAction className={classes.bottomNavigationItem} label={item.label} value={item.value} icon={GetIcon(item.icon)} />
          ))}
        </BottomNavigation> */}
        {links &&
          <div className={isMobile ? classes.footerListMobile : classes.footerList}>
            {links.map(link => (
              <a href={link.link} target="_blank">
                <Text label={link.label} variant="body1" color="textSecondary" className={classes.footerParagraph} />
              </a>
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
      return <TwitterIcon />
      break;
    case "facebook":
      return <FacebookIcon />
    case "instagram":
      return <InstagramIcon />
    case "recent":
      return <RestoreIcon />
    case "favorite":
      return <FavoriteIcon />
    case "location":
      return <LocationOnIcon />
    case "discord":
      return <ChatIcon />
    case "send":
      return <SendIcon />
    default:
      break;
  }
}

export default Footer;