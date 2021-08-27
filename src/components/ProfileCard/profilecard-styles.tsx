import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 280,
    minHeight: 180,
    textAlign: "left",
    backgroundColor: '#1E2231',
    paddingLeft: "2%",
    paddingRight: "1%",
    paddingBottom: '2%',
    border: "1px solid #282C3E"
  },
  label: {
    marginTop: "5%",
    marginBottom: "5%",
    wordBreak: 'break-word'
  },
  wallet: {
    fontSize: '0.7777777777777778em',
    marginTop: "5%",
    marginBottom: "5%",
  },
  userDetails: {
    display: 'grid',
    gridTemplateColumns:'30% 70%'
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  actions: {
    display: "grid",
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