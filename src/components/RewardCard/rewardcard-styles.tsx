import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    minHeight: 180,
    textAlign: "center",
    backgroundColor: '#151823',
    paddingLeft: "2%",
    paddingRight: "1%",
    border: "1px solid #737B99"
  },
  content: {
    gridTemplateColumns: '65% 35%',
    display: 'grid'
  },
  informationCard: {
    textAlign: 'left',
    gridColumn: 1,
  },
  infoData: {
    margin: '1% 0 6% 0',
  },
  bottomContent: {
    display: 'flex',
    margin: '3% 0 1% 0',
  },
  actionCard: {
    gridColumn: 2,
  },
  label: {
    fontSize: 12,
    marginTop: "5%",
    marginBottom: "5%"
  },
  rewardContent: {
    color: 'white',
    border: '1px solid #15AC5B',
    padding: '3% 5%',
    width: '60%',
    margin: '2% 0 2% 20%',
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
  },
  button: {
    marginTop: '8%',
    width: '60%'
  },
  iconContent: {
    marginRight: '5%',
    display: 'flex',
    width: '25%'
  }
});

export default useStyles;