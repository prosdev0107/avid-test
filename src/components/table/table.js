import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import { getComparator, stableSort } from 'helper/tableHelper';
import useStyles from './style';
import TableHeader from './tableHeader';
import TablePopover from './tablePopover';

export default function DataTable({ data, headerCells, handleDetailsClick }) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState(headerCells[0].id);
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = data.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    let selectedId = selected.indexOf(id);
    let newSelected = [];

    if (selectedId === -1) {
      newSelected = selected.concat([id]);
    } else {
      selected.splice(selectedId, 1);
      newSelected = [...selected];
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.includes(id);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="enhanced table"
          >
            <TableHeader
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
              headerCells={headerCells}
            />
            <TableBody>
              {stableSort(data, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(index);
                  const labelId = `table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={index}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          onChange={(event) => handleClick(event, index)}
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      {headerCells.map((cell) => {
                        if (cell.id === 'review_rating') {
                          const values = row[cell.id].split(' ');
                          const value = parseInt(values[0]);
                          return (
                            <TableCell align="left">
                              <Rating name="read-only" value={value} readOnly />
                            </TableCell>
                          );
                        } else if (cell.id === 'review_text') {
                          return (
                            <TableCell align="left">
                              <TablePopover
                                name="Show review text"
                                content={row[cell.id]}
                              />
                            </TableCell>
                          );
                        } else if (cell.id === 'review_details') {
                          return (
                            <TableCell align="left">
                              <Button
                                variant="contained"
                                color="secondary"
                                onClick={(e) => handleDetailsClick(e, index)}
                              >
                                Show review details
                              </Button>
                            </TableCell>
                          );
                        }
                        return (
                          <TableCell key={`${cell.id}-${index}`} align="left">
                            {row[cell.id]}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

DataTable.prototype = {
  data: PropTypes.array.isRequired,
  headerCells: PropTypes.array.isRequired,
  handleDetailsClick: PropTypes.func.isRequired,
};
