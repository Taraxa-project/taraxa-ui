import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    minHeight: 350,
    textAlign: "center",
    backgroundColor: '#212534',
    paddingLeft: "2%",
    paddingRight: "1%",
    border: "1px solid #737B99"
  },
  content: {
    
  },
  informationCard: {
    textAlign: 'left',
  },
  infoData: {
    margin: '1% 0 6% 0',
  },
  bottomContent: {
    margin: '5% 0 3% 0',
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
    width: '93%',
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
    marginBottom: '5%',
    display: 'flex',
  },
  dot: {
    height: '15px',
    width: '15px',
    backgroundColor: '#15AC5B',
    borderRadius: '50%',
    display: 'inline-block',
    marginLeft: '40%',
  }
});

export default useStyles;