import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { CssBaseline, AppBarProps, AppBar } from '@material-ui/core';
import theme from "../theme";
import useStyles from './header-styles';
import Font from 'react-font';
import { useMediaQuery } from 'react-responsive';


export interface HeaderProps extends AppBarProps {
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  hamburger?: JSX.Element;
  wallet?: JSX.Element;
  button?: JSX.Element;
  profileModal?: JSX.Element;
  showProfileModal?: boolean;
};

export default function PrimarySearchAppBar({ color, position, elevation, Icon, wallet, button, profileModal, showProfileModal, hamburger }: HeaderProps) {
  const classes = useStyles();
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.grow}>
        <AppBar color={color} position={position} elevation={elevation}>
          <Toolbar>


            {Icon && <a className={classes.headerIconContainer} href="/">
              <Icon />
              <div style={{ width: '20px' }} />
            </a>
            }

            <a className={classes.title} href="/">
              <Typography variant="h6" noWrap>
                <Font family="Inter"><>Taraxa Community</></Font>
              </Typography>
            </a>
            {/* <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div> */}
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {wallet}
              <div className={classes.button}>{hamburger && isMobile ? hamburger : button}</div>
            </div>

          </Toolbar>
        </AppBar>
      </div>
      {profileModal && showProfileModal && <div className={classes.profileModal}>{profileModal}</div>}
    </ThemeProvider >
  );
}