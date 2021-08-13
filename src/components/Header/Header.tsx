import React from 'react';
import { alpha, makeStyles, Theme, createStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '../Button';
import { CssBaseline } from '@material-ui/core';
import theme from "../theme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.black, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: '5%',
      width: '200%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    headerIcon: {
      marginRight: '5%', 
      marginLeft: '1%'
    }
  }),
);

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
};

export default function PrimarySearchAppBar({color, position, elevation, Icon}: HeaderProps) {
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
            <Button label="Sign in / Sign up" color="primary" />
            </div>
            
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}