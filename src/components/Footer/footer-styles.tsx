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
      marginLeft: '11.5%',
      marginBottom: '2%',
      display: 'inline-flex',
      alignItems: 'center',
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
    }
  }),
);

export default useStyles;