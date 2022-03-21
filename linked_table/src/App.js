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
import "./App.css";
import "./main.scss";

let isFirst = true;

const ROW_HEIGHT = 60;

const rowHeights = [];


// approach - 
// before creating the table, create a column Mapping as - 
 // {<columnName: columnNo>} 
// while creating the table, create a rowIdMapping as -
 // {<rowId: rowNo>} 

 // after creating the table, process the table_links data 
 // and return a linkObjects array as 
 // 2 ways-
 // a. for each object in table links data
         // create a <linkObj>
         // mark isLinked[rowNo][columnNo] = {linkObj}
         // return isLinked Matrix



function createData(id, name, calories, fat, carbs, protein) {

  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein
  };
}

const table_links = [
  
  // {
  //   to: {
  //     id: 3, 
  //     fieldName: 'calories',
  //   },
  //   from: {
  //     id: 1,
  //     fieldName: 'fat'
  //   }
  // },
  {
    to: {
      id: 1, 
      fieldName: 'calories',
    },
    from: {
      id: 3,
      fieldName: 'fat'
    }
  },
  // {
  //   to: {
  //     id: 3, 
  //     fieldName: 'calories',
  //   },
  //   from: {
  //     id: 1,
  //     fieldName: 'fat'
  //   }
  // },
  // {
  //   to: {
  //     id: 3, 
  //     fieldName: 'fat',
  //   },
  //   from: {
  //     id: 1,
  //     fieldName: 'calories'
  //   }
  // },
  // {
  //   to: {
  //     id: 5, 
  //     fieldName: 'calories',
  //   },
  //   from: {
  //     id: 1,
  //     fieldName: 'fat'
  //   }
  // }
 
]

const rows = [
  createData(1, 'Cupcake', 305, 3.7, 67, 4.3),
  createData(2, 'Eclair', 262, 16.0, 24, 6.0),
  createData(3, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData(4, 'Gingerbread', 356, 16.0, 49, 3.9),
  createData(5, 'Honeycomb', 408, 3.2, 87, 6.5),
  createData(6, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData(7, 'Jelly Bean', 375, 0.0, 94, 0.0),
  createData(8, 'KitKat', 518, 26.0, 65, 7.0),
  createData(9, 'Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
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

const headCells = [
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
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        
        {headCells.map((headCell) => (
          <TableCell
          className = "table-head"
            key={headCell.id}
            align='center'
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
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
  const { numSelected } = props;

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
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
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
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [windowSize, setWindowSize] = React.useState(window.visualViewport.width);

  React.useEffect(() => {
    window.addEventListener('resize', setWindowSize);
    processTableDimensions();
    setWindowSize();
    return ()=> {
      window.removeEventListener('resize', setWindowSize);
    }
  }, [])



  const isLinkedMatrix = processData();


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

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
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
              {/*stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)*/

                rows.map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      className = "my-row"
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      {Object.keys(row).map((fieldName, colIndex) => {
                        if(fieldName === "id") {
                          return null;
                        } else {
                          return <LTCell id="fieldName" key={fieldName} 
                        linkObjArr = {isLinkedMatrix[index] && isLinkedMatrix[index][colIndex]}> 
                          {row[fieldName] && <span className = "content-span">{row[fieldName]}</span>} 
                         </LTCell>
                      }
                      })
                    }

                      
                    </TableRow>
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
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}

function LTCell({children, linkObjArr}) {
  if(linkObjArr) {
    return <LinkedCell {...{linkObjArr}}>{children}</LinkedCell>
  } else {
    return <TableCell align="center" className="my-cell">
    {children}
    <svg className="cell_link2" width="20"  height="20"  xmlns="http://www.w3.org/2000/svg">
        <circle cx={0} cy={0} r="20" fill="blue" transform-origin="0 0"/>
    </svg>
    </TableCell>
  }
}

function LinkedCell({linkObjArr, children}) {
  
  return <LTCell>
      {children}
      {
        linkObjArr.map((linkObj, index) => {
          return <SVGLink {...{linkObj}} key={index}/>;
        })
      }
   
  </LTCell>
}


function getRowHeight(i) {
  return rowHeights[i] || ROW_HEIGHT;
}


function SVGLink({linkObj}) {
  const TABLE_WIDTH = Math.max(750, window.visualViewport.width);
  const COLUMN_WIDTH = TABLE_WIDTH/5;
  let rowDiff = linkObj.to.row - linkObj.from.row;
  let columnDiff = linkObj.to.col - linkObj.from.col;

  const PATH_WIDTH = columnDiff * COLUMN_WIDTH;
  let PATH_HEIGHT = 0;
  let dirX = Math.sign(columnDiff);
  let dirY = Math.sign(rowDiff) || 1;

  let i = linkObj.from.row;
  PATH_HEIGHT =  dirY * getRowHeight(i)/2
  i = i + dirY;
  while(i != linkObj.to.row) {
    PATH_HEIGHT = PATH_HEIGHT + dirY * getRowHeight(i);
    i = i + dirY;
  }

  PATH_HEIGHT +=  dirY * getRowHeight(i)/2

  let p1 = {x: 0, y: 0};
  let p2 = {y: PATH_HEIGHT, x: (columnDiff) * COLUMN_WIDTH};


  let dx1 = 0;
  
  p1.x = p1.x + (dirX || 1) * dx1;
  p2.x = p2.x + (dirX || 1) * dx1;



  let {join_path, angle} = getPath(p1, {x: p2.x-dirX * dx1, y:p2.y});

  angle = 10 * (Math.sign(((p2.x - p1.x)||-1)*(p2.y - p1.y)));
  

  return (
    // <svg width={Math.abs((p2.x - p1.x)) || COLUMN_WIDTH/2} height={Math.abs(p2.y - p1.y)|| ROW_HEIGHT} className="cell_link" xmlns="http://www.w3.org/2000/svg">
    <svg className="cell_link" xmlns="http://www.w3.org/2000/svg">

        <path d={join_path}  strokeDasharray="5,5" fill="transparent"/>
       {/* <path d = {getTrianglePath(p2, Math.sign(p2.x - p1.x))} className="triangle"
         transform={`rotate(${angle})`} transform-origin={`${p2.x} ${p2.y}`}/>
     */}   <circle cx={p1.x} cy={p1.y} r="5" fill="red"/>
        <circle cx={p2.x} cy={p2.y} r="5" fill="green"/>
        <circle cx={p2.x} cy={p2.y} r="5" fill="green"/>

      </svg>
    )

}

function getTrianglePath(p, dir) {
  let {x, y} = p;


console.log("dir", dir)
  let dx = 10 * -(dir || -1) ;
  let dy = 5;

  let p1 = `${x} ${y}`;
  let p2 =  `${x + dx} ${y - dy}`;
  let p3 = `${x + dx} ${y + dy}`

  const path = `M ${p1} L ${p2} L ${p3} Z`;
  console.log(path);
  return path; 
}

function getPath(p1, p2) {
  let {x:x1, y:y1} = p1;
  let {x:x2, y:y2} = p2;

  let dx = 100;
  let dy = 20;

  let dirX = Math.sign(x2 - x1);
  let dirY = Math.sign(y2 - y1);

 

  let c1 = {x: x1 + (dirX || 1)*dx, y: y1 + dirY*dy};
  let c2 = {x: x2 - (dirX || -1)*dx, y: y2 - dirY*dy};

  let angle = (Math.atan(p2.y - c2.y/p2.x - c2.x) * 180/Math.PI);
   angle = (Math.atan(p2.y - c2.y/p2.x - c2.x));
  // angle = angle || 0;

console.log(p1, c1, c2, p2);
  const join_path = `m ${x1} ${y1} c ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${x2} ${y2}`;

  return {join_path, angle};

}

function processLinks(rowIdMapping, columnMapping, table_links) {

  // for each table link, get from row, col no. and to row, col no.
  let isLinkedMatrix = [];


  table_links.forEach(({from, to}) => {

      let linkObj =  {
        from: {row: rowIdMapping[from.id], col: columnMapping[from.fieldName]},
        to: {row: rowIdMapping[to.id], col: columnMapping[to.fieldName]}
      }

      let i = linkObj.from.row;
      let j = linkObj.from.col;

      isLinkedMatrix[i] = isLinkedMatrix[i] || [];
      isLinkedMatrix[i][j] = isLinkedMatrix[i][j] || [];
      isLinkedMatrix[i][j].push(linkObj);
      
  });
  
  return isLinkedMatrix;
}


function processTableDimensions() {
   let allRows = document.querySelectorAll(".my-row");
   allRows.forEach((row, index) => {
     console.log("row height: " +  row.offsetHeight);
     // rowIdMapping
     rowHeights[index] = row.offsetHeight;
   });
}

function processData() {
  
  let rowIdMapping = {};
  let columnMapping = {};
  rows.forEach((row, index) => {
    rowIdMapping[row.id] = index;
  });

  Object.keys(rows[0]).forEach((fieldName, index) => {
    columnMapping[fieldName] = index;
  });

  let isLinkedMatrix = processLinks(rowIdMapping, columnMapping, table_links);

  return isLinkedMatrix;

}