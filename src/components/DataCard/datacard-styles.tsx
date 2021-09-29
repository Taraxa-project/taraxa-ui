import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: "320px",
    minHeight: 180,
    textAlign: "center",
    backgroundColor: '#151823',
    paddingLeft: "2%",
    paddingRight: "1%",
    border: "1px solid #15AC5B",
  },
  mobileRoot: {
    width: '85%',
    minHeight: 180,
    textAlign: "center",
    backgroundColor: '#151823',
    paddingLeft: "2%",
    paddingRight: "1%",
    border: "1px solid #15AC5B",
  },
  title: {
    marginBottom: '5%',
    fontWeight: 700,
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  tooltipIcon: {
    float: 'right',
    marginTop: '5%',
  },
  label: {
    fontSize: 12,
    marginTop: "5%",
    marginBottom: "5%"
  },
  actions: {
    display: "grid",
    marginBottom: "5%"
  },
  icon: {
    marginBottom: '5%',
    marginTop: '5%'
  }
});

export default useStyles;