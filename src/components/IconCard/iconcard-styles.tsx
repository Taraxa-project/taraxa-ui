import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 280,
    minHeight: 180,
    textAlign: "left",
    backgroundColor: '#282C3E',
    paddingLeft: "24px",
    paddingRight: "24px",
    border: "1px solid #40465F",
    marginBottom: '5%',
  },
  label: {
    fontSize: 12,
    marginTop: "10%",
    marginBottom: "15%"
  },
  actions: {
    display: "grid",
    paddingLeft: '2%',
    paddingRight: '8%',
    marginBottom: "10%"
  },
  bottomSpacing: {
    marginBottom: '5%'
  },
  icon: {
    marginBottom: '10%',
    marginTop: '10%'
  }
});

export default useStyles;