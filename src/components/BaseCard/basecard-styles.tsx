import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 320,
    maxHeight: 160,
    textAlign: "left",
    backgroundColor: '#181B27 !important',
    paddingLeft: "2%",
    paddingRight: "1%",
    border: "1px solid #40465F",
  },
  title: {
    fontWeight: 700,
    marginBottom: '8%'
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  actionContainer: {
    marginTop: "12%",
    display: 'flex',
    justifyContent: "space-between",
    minHeight: "32px",
  },
  icon: {
    marginLeft: 'auto',
    marginRight: 0,
  },
  label: {
    fontSize: 12,
    flexGrow: 1,
    alignSelf: "center"
  },
});

export default useStyles;