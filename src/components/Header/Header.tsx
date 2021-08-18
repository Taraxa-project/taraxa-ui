import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '../Button';
import { CssBaseline } from '@material-ui/core';
import theme from "../theme";
import useStyles from './header-styles';


export interface HeaderProps  {
  color: 'default'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'transparent';
  position:	'absolute'
  | 'fixed'
  | 'relative'
  | 'static'
  | 'sticky';
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  elevation?: number;
  button?: JSX.Element;
};

export default function PrimarySearchAppBar({color, position, elevation, Icon, button}: HeaderProps) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.grow}>
        <AppBar color={color} position={position} elevation={elevation}>
          <Toolbar>
            {Icon && <><Icon className={classes.headerIcon} />
                          <div style={{width: '20px'}}/>
                          </>
            }
            
            <Typography className={classes.title} variant="h6" noWrap>
              Taraxa Community
            </Typography>
            <div className={classes.search}>
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
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {button}
            </div>
            
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}