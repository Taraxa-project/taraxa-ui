import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 280,
    minHeight: 180,
    textAlign: "center",
    backgroundColor: '#1E2231',
    paddingLeft: "2%",
    paddingRight: "1%",
    paddingBottom: '2%',
    border: "1px solid #282C3E"
  },
  label: {
    marginTop: "5%",
    marginBottom: "30%",
    wordBreak: 'break-word'
  },
  value: {
    marginTop: "5%",
    marginBottom: "30%",
    wordBreak: 'break-word'
  },
  description: {
    marginTop: "5%",
    marginBottom: "5%",
    wordBreak: 'break-word'
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '3%'
  },
  icon: {
    marginRight: '5%',
    display: 'flex'
  },
  actions: {
    display: "grid",
    marginBottom: "5%"
  },
  bottomSpacing: {
    marginBottom: '5%'
  },
});

export default useStyles;