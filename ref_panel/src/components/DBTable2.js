import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';


import AddIcon from "@material-ui/icons/AddCircleOutline";
import nw from "../network/network_requests";
import Form from "../components/Form";
import {DBTableHeader, DBTableRow, AddEntryIcon} from "./DbTableComps";
import "./table.scss";
import {METHOD_TYPES} from "../network/network_enums";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import styles from "../index.module.css";


import processFormFeilds from "../processFormFeilds";

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows_old = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, property, dataType) {
      let p1 = a[property];
      let p2 = b[property];
      switch(dataType) {
        case "number": 
          p1 = Number(p1);
          p2 = Number(p2);
          break;
        case "string": 
        case "url":
          p1 = p1.toLowerCase();
          p2 = p2.toLowerCase();
          break;
        case "date":
          p1 = (new Date(p1)).getTime();
          p2 = (new Date(p2)).getTime();
          break;

      }
      if(p2 < p1) {
        return -1;
      } else if(p2 > p1){
        return 1;
      }


 
      return 0;
}

function getComparator(order, orderBy, formFields) {
  let fieldObj = formFields.filter((field) => {
      return field.name === orderBy;
    })[0];

    if(!fieldObj) {
      return;
    }

  let dataType = fieldObj.type || "number";

  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy, dataType)
    : (a, b) => -descendingComparator(a, b, orderBy, dataType);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells_old = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Dessert (100g serving)',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'Calories',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'Fat (g)',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Carbs (g)',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'Protein (g)',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, headCells, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };


    const columnHeads = (headCells) =>  {
      return headCells.map((headCell) => {

        if(headCell.type == 'json') {
          return columnHeads(headCell.fields);
        } else {
          return (
              <TableCell
            key={headCell.name}
            align={headCell.type === "number" ? 'left' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.name ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.name}
              direction={orderBy === headCell.name ? order : 'asc'}
              onClick={createSortHandler(headCell.name)}
            >
              {headCell.fieldName}
              {orderBy === headCell.name ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
            )
        }
      })
    }  
        
          
   

  return (

    <TableHead>
      <TableRow>
        {/*<TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>*/}

        {columnHeads(headCells)}
        <TableCell align="center">Action</TableCell>
        
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected, title, 
    rows, setRows, setDataLoaded, 
    dataLoaded,
    searchField, searchFieldName, 
          setPage, rowName, openForm } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {title} List
        </Typography>
      )}

      {/*{numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}*/}


      <div className="header-right">
        <SearchInput {...{rows, setRows, setDataLoaded, 
          searchField, searchFieldName, dataLoaded,
          setPage}}/>
        <AddEntryIcon {...{rowName, openForm}}/>
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable({requestName, formFields, 
  rowName, keyField = "id", enableSearch = true, searchField, 
  searchFieldName}) {

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState("id");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


  /* custom logic */

  const [rows, setRows] = React.useState([]);
  const [showForm, setShowForm] = React.useState(false);
  const [formData, setFormData] = React.useState({});
  const [dataLoaded, setDataLoaded] = React.useState(false);
  const [method, setCurrentMethod] = React.useState(null);



  function openForm(data, method) {
    setFormData(data);
    setCurrentMethod(method);
    setShowForm(true);
  }

   React.useEffect(() => {
     setOrderBy(keyField)
   }, [keyField])

  React.useEffect(() => {
      const IS_LOGS = requestName.includes('logs');
      const rest_params = [];
      if(IS_LOGS) {
        rest_params.push(1, 1);
      }
     !dataLoaded && nw.request(requestName, METHOD_TYPES.GET, rest_params).then((data) => {
      const dataList = IS_LOGS? data.page.content: data.list;
      setRows(dataList);
      setDataLoaded(true);
    }, () => {
      setRows([]);
      setDataLoaded(true);

    });
  }, [dataLoaded])


  /* custom logic end */

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
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

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  processFormFeilds(formFields);

  if(!dataLoaded) {
    return 'loading...';
  }

  return (
    <Box  className={styles.db_table_parent} sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2, overflow: 'hidden' }}>
        <EnhancedTableToolbar {...{
          rows, setRows, setDataLoaded,
          dataLoaded, 
    searchField, searchFieldName, 
          setPage, rowName, openForm}} title={rowName} numSelected={selected.length} />
        <TableContainer   className={styles.db_table}>
          <Table stickyHeader
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              headCells = {formFields}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy, formFields))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row[keyField]);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (

                    <DBTableRow {...{requestName, 
              formFields, setDataLoaded, 
              openForm, keyField, handleClick, isItemSelected, labelId, ...row}} key={row[keyField]}/>

                    
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    {/*  <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />*/}

      {
      showForm && 
      (<Form {...{
        heading: rowName, 
        formData, 
        requestName, 
        formFields,  
        method,
        keyField,
        closeMethod: () => {
          setShowForm(false);
          setDataLoaded(false);
        }
      }
      }/>
      )
    }
    </Box>
  );
}


function SearchInput({rows, setRows, setDataLoaded, 
          searchField, searchFieldName, dataLoaded,
          setPage}) {
  const [completeList, setCompleteList] = React.useState(rows);


  React.useEffect(() => {
    setCompleteList(rows);
  }, [dataLoaded])

  return (
    <div className = "search-div">
    <input className = "search_input"
        placeholder={" Search by " + searchFieldName}
        onChange={(event) => {
          let value = event.target.value;
          if(!value) {
            setDataLoaded(false);
            return;
          }
          let currentList = [...completeList];
          let newList = currentList.filter((rowData) => {
            console.log(rowData[searchField]);
            let bool = rowData[searchField].toString().
            toLowerCase().includes(value.toLowerCase());
            return bool;
          })
          setRows(newList);
          setPage(0);
        }}
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
      </div>
      );
}