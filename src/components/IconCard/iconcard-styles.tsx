import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 280,
    minHeight: 180,
    textAlign: "left",
    backgroundColor: '#282C3E',
    paddingLeft: "2%",
    paddingRight: "1%",
    border: "1px solid #40465F"
  },
  label: {
    fontSize: 12,
    marginTop: "5%",
    marginBottom: "5%"
  },
  actions: {
    display: "grid",
    paddingLeft: '2%',
    paddingRight: '8%',
    marginBottom: "5%"
  },
  bottomSpacing: {
    marginBottom: '5%'
  },
  icon: {
    marginBottom: '5%',
    marginTop: '5%'
  }
});

export default useStyles;