import { createStyles, lighten, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
      color: '#FFFFFF',
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
    "MuiSvgIcon-root": {
      fill: 'white',
    },
    tableCell: {
      color: '#FFFFFF',
      border: 'none'
    },
    dateTableCell: {
      color: '#6A7085',
      border: 'none'
    },
    tablePagination: {
      color: 'white'
    },
    tablePaginationCaption: {
        color: 'white'
      },
    tablePaginationSelectIcon: {
        color: 'white'
      },
    tablePaginationSelect: {
        color: 'white'
      },
    tablePaginationActions: {
        color: 'white',
      },
  }),
);

export default useStyles;