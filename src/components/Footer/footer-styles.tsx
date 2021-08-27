import {  makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    footer: {
      width: '100%',
      backgroundColor: '#151823',
      color: '#fff',
      fontFamily: 'Inter, sans-serif !important',
    },
    logo: {
      gridRow: 1,
      width: '70.5%',
      borderTop: '1px solid #40465f',
      paddingTop: '2%',
      marginLeft: '20%',
      marginBottom: '2%',
      alignItems: 'center',
      display: 'grid',
      gridTemplateColumns: '30% 30% 60%',
    },
    description: {
      width: '45%',
      gridRow: 2,
      marginLeft: '20.5%',
      marginBottom: '4%'
    },
    bottomNavigation: {
      gridRow: 3,
      backgroundColor: '#151823 !important',
      paddingBottom: '2% !important',
      marginTop: '2% !important'
    },
    bottomNavigationItem: {
      color: '#fff !important',
      justifyContent: 'flex-end'
    },
    footerList: {
      gridRow: 4,
      marginLeft: '20.5% !important',
      display: 'flex',
      marginBottom: '5%',
      textAlign: 'left'
    },
    footerParagraph: {
      marginRight: '5%',
      cursor: 'pointer',
    },
    footerUl: {
      marginLeft: '130%',
      width: '100%',
    },
    footerLi: {
      display: 'inline',
      marginLeft: '10%'
    },
    footerSVG: {
      textAlign: 'left',
      gridColumn: 1,
      gridRow: 1,
    },
    logoText: {
      width: '80%',
      gridColumn: 1,
      gridRow: 1,
    }
  }),
);

export default useStyles;