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
import { BottomNavigationAction, CssBaseline, List, ListItem, ListItemText, ThemeProvider, Typography } from '@material-ui/core';
import './footer.css';
import Font from 'react-font';

export interface FooterProps  {
  items: { label: string; value: string; icon: "twitter" | "facebook" | "instagram" | "recent" | "favorite" | "location" | "discord" | "send"}[];
  showLabels: boolean;
  description?: string;
  links?: { label: string; }[];
};

const Footer = ({
  items,
  showLabels,
  description,
  links
}: FooterProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="footer">
        <div className="logo">
          <Font family='Inter'><span>TARAXA</span></Font>
        </div>
        {description && <div className="description">
          <Font family='Inter'><span>{description}</span></Font>
        </div>}
        <BottomNavigation showLabels={showLabels} className="bottomNavigation">
          {items.map((item) => (
            <BottomNavigationAction className="bottomNavigationItem" label={item.label} value={item.value} icon={GetIcon(item.icon)} />
          ))}
        </BottomNavigation>
        {links && 
          <List dense className="footerList">
            {links.map((link, index) => (
              <ListItem>
                <ListItemText style={{  cursor: 'pointer' }}>
                  <Font family='Inter'><span>{link.label}</span></Font>
                </ListItemText>
              </ListItem>
          ))}
          </List>
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