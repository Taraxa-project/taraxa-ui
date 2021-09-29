import {  makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    footer: {
      marginTop: "56px",
      width: '100%',
      backgroundColor: '#151823',
      color: '#fff',
      fontFamily: 'Inter, sans-serif !important',
    },
    logo: {
      gridRow: 1,
      borderTop: '1px solid #40465f',
      paddingTop: '2%',
      marginBottom: '2%',
      alignItems: 'center',
      display: 'grid',
      gridTemplateColumns: '25% 75%',
    },
    logoMobile: {
      gridRow: 1,
      borderTop: '1px solid #40465f',
      paddingTop: '2%',
      marginBottom: '2%',
      alignItems: 'center',
      display: 'grid',
      gridTemplateColumns: '30% 30% 60%',
    },
    description: {
      gridRow: 2,
      marginBottom: '4%'
    },
    descriptionMobile: {
      width: '80%',
      gridRow: 2,
      marginBottom: '4%',
      paddingRight: '2%'
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
      display: 'flex',
      marginBottom: '5%',
      textAlign: 'left'
    },
    footerListMobile: {
      gridRow: 4,
      display: 'flex',
      marginBottom: '5%',
      textAlign: 'left'
    },
    footerParagraph: {
      cursor: 'pointer',
    },
    mobileIcons: {
      width: '100%',
      textAlign: 'left',
    },
    mobileFooterUL: {
      width: '100%',
      paddingLeft: '0 !important'
    },
    footerUl: {
      textAlign: 'right',
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
    footerSVGMobile: {
      textAlign: 'left',
      gridColumn: 1,
      gridRow: 1,
      marginLeft: '16% !important',
    },
    logoText: {
      width: '80%',
      gridColumn: 1,
      gridRow: 1,
    },
    logoTextMobile: {
      width: '80%',
      gridColumn: 1,
      gridRow: 1,
      marginLeft: '40%',
      fontSize: '20px !important',
    }
  }),
);

export default useStyles;