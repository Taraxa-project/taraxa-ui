import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 280,
    textAlign: "left",
    backgroundColor: '#181B27 !important',
    paddingLeft: "2%",
    paddingRight: "1%",
    border: "1px solid #40465F",
    marginBottom: '5% !important',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  icon: {
    marginLeft: '70%'
  },
  label: {
    fontSize: 12,
    marginTop: "12%",
  },
  bottomSpacing: {
    marginBottom: '8%'
  }
});

export default useStyles;