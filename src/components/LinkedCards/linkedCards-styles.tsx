import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '88%',
    minHeight: 280,
    textAlign: "left",
    backgroundColor: '#151823',
    paddingLeft: "2%",
    paddingRight: "1%",
    paddingBottom: '2%',
    border: "1px solid #40465F",
    display: 'grid !important',
    gridTemplateColumns: '33% 33% 33%'
  },
  mobileRoot: {
    width: '88%',
    minHeight: 900,
    textAlign: "left",
    backgroundColor: '#151823',
    paddingLeft: "2%",
    paddingRight: "1%",
    paddingBottom: '2%',
    border: "1px solid #40465F",
    display: 'grid !important',
    gridTemplateRows: '33% 33% 33%'
  },
  approvedCard: {
    height: '90%',
    borderRight: '1px solid #40465F',
    backgroundColor: '#151823',
    textAlign: 'center',
    marginTop: '5%',
    gridColumn: 1,
    gridRow: 1
  },
  mobileApprovedCard: {
    height: '90%',
    borderBottom: '1px solid #40465F',
    backgroundColor: '#151823',
    textAlign: 'center',
    marginTop: '5%',
    gridColumn: 1,
    gridRow: 1
  },
  reviewCard: {
    height: '90%',
    borderRight: '1px solid #40465F',
    backgroundColor: '#151823',
    textAlign: 'center',
    marginTop: '5%',
    gridColumn: 2,
    gridRow: 1
  },
  mobileReviewCard: {
    height: '90%',
    borderBottom: '1px solid #40465F',
    backgroundColor: '#151823',
    textAlign: 'center',
    marginTop: '5%',
    gridColumn: 1,
    gridRow: 2
  },
  rejectedCard: {
    height: '90%',
    backgroundColor: '#151823',
    textAlign: 'center',
    marginTop: '5%',
    gridColumn: 3,
    gridRow: 1
  },
  mobileRejectedCard: {
    height: '90%',
    backgroundColor: '#151823',
    textAlign: 'center',
    marginTop: '5%',
    gridColumn: 1,
    gridRow: 3
  }
});

export default useStyles;