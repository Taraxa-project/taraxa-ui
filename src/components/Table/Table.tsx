import React from 'react';
import useStyles from './table-styles';
import MTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';

export interface TableProps {
  columns: { path: string, name: string}[];
  rows: { Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>, data: any[] }[];
}

export default function Table({columns, rows}: TableProps) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  return (
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={0}>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            classes={{
              root: classes.tablePagination,
              caption: classes.tablePaginationCaption,
              selectIcon: classes.tablePaginationSelectIcon,
              select: classes.tablePaginationSelect,
              actions: classes.tablePaginationActions,
            }}
          />
          <TableContainer>
            <MTable
              className={classes.table}
              aria-labelledby="tableTitle"
              size='medium'
              aria-label="enhanced table"
            >
              <TableBody>
                { rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    row.data.map((rowData: any) => (
                        <TableRow
                        // onClick={(event) => handleClick(event, row.username)}
                        tabIndex={-1}
                        key={index}
                        >
                        {row.Icon && <TableCell className={classes.tableCell} align="left">{<row.Icon/>}</TableCell>}
                        {columns.map(({ path }) => (
                          (rowData[path] instanceof Date) ? 
                          <TableCell className={classes.dateTableCell} align="right">
                            {moment(rowData[path]).fromNow()}
                          </TableCell> : 
                          <TableCell className={classes.tableCell} align="right">
                            {rowData[path]}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (53) * emptyRows }}>
                    <TableCell className={classes.tableCell} colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </MTable>
          </TableContainer>
        </Paper>
      </div>
  );
}
