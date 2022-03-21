import nw from "../network/network_requests";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from "@material-ui/core/TablePagination";
import Paper from '@mui/material/Paper';
// import AddIcon from '@mui/icons-material/Add';
import AddIcon from "@material-ui/icons/AddCircleOutline";

import Form from "../components/Form";
import {DBTableHeader, DBTableRow, AddEntryIcon} from "./DbTableComps";
import "./table.scss";
import {METHOD_TYPES} from "../network/network_enums";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";


// let
export default function DBTable({requestName, formFields, 
	rowName, keyField = "id", enableSearch = true, searchField, 
	searchFieldName}) {
	const [completeList, setCompleteList] = React.useState([]);
	const [showForm, setShowForm] = React.useState(false);
	const [formData, setFormData] = React.useState({});
	const [dataLoaded, setDataLoaded] = React.useState(false);
	const [method, setCurrentMethod] = React.useState(null);
	// function 
	const [tableList, setTableList] = React.useState([]);
	const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

	const [currentSortProp, setCurrentSortProp] = React.useState("id");
	const [currentSortOrder, setCurrentSortOrder] = React.useState(0);
	// function createData(name, calories, fat, carbs, protein) {
  		// return { name, calories, fat, carbs, protein };
		// {id,table_name,nrr,nr,lost,won,played,points}  		
	// }

	


	function sortFn(order, property) {
		setCurrentSortProp(property);
		setCurrentSortOrder(order);

		let fieldObj = formFields.filter((field) => {
			return field.name === property;
		})[0];

		if(!fieldObj) {
			return;
		}

		let dataType = fieldObj.type || "number";

		console.log(`sort type ${dataType}, order ${order}, property ${property}`);
		let list = [...tableList];
		(list.sort((a, b) => {
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
			if(p1 > p2) {
				return order;
			} else {
				return -order;
			}
		}));

		setTableList(list);
		
	}

	function openForm(data, method) {
		setFormData(data);
		setCurrentMethod(method);
		setShowForm(true);
	}

 
	React.useEffect(() => {
		
	 	!dataLoaded && nw.request(requestName, METHOD_TYPES.GET).then((data) => {
			setTableList(data.list);
			setCompleteList(data.list);
			setDataLoaded(true);
			sortFn(currentSortOrder, currentSortProp);
		}, () => {
			setCompleteList([]);
			setTableList([]);
			setDataLoaded(true);

		});
	}, [dataLoaded])

	return (
		<React.Fragment>
		<header className = "header item">
      <h3 className="table-heading"> {rowName} List </h3>
      <div className="header-right">
			{enableSearch && <SearchInput {...{setDataLoaded, 
				completeList, 
				setTableList, 
				searchField, searchFieldName, 
				setPage}}/>}
      <AddEntryIcon {...{rowName, openForm}}/>
      </div>

		</header>
		<div className = "content item">
	<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <DBTableHeader {...{formFields, orderBy: "team_name", order: "asc", 
        sortFn, currentSortOrder, currentSortProp}}/>
        <TableBody>
          {tableList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((tableData) => {
            return <DBTableRow {...{requestName, 
              formFields, setDataLoaded, 
              openForm, keyField, ...tableData}} key={tableData.id}/>
          })}
        </TableBody>
      </Table>
    </TableContainer>
		</div>

		<footer className = "footer item">
	    <TablePagination
	            rowsPerPageOptions={[5, 10, 25]}
	            component="div"
	            count={tableList.length}
	            rowsPerPage={rowsPerPage}
	            page={page}
	            onPageChange={(event, newPage) => {
						    setPage(newPage);
						  }}
	            onRowsPerPageChange={(event) => {
						    setRowsPerPage(parseInt(event.target.value, 10));
						    setPage(0);
						  }}
	      />
      </footer>

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
	</React.Fragment>
)
}

