import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 280,
    minHeight: 180,
    textAlign: "left",
    backgroundColor: '#40465F',
    paddingLeft: "10px",
    paddingRight: "5px",
    border: "1px solid #40465F",
    marginBottom: '5%',
  },
  label: {
    fontSize: 12,
    marginTop: "7%",
    marginBottom: "15%"
  },
  tooltipIcon: {
    float: 'right',
    marginTop: '12%',
  },
  noIconTooltipIcon: {
    float: 'right',
    marginTop: '3%',
  },
  actions: {
    display: "grid",
    paddingLeft: '2%',
    paddingRight: '4%',
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