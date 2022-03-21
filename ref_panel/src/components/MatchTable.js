import nw from "../network/network_requests";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Form from "../components/MatchForm";
import {DBTableHeader, DBTableRow, AddEntryIcon} from "./DbTableComps";
import "./table.scss";
import {METHOD_TYPES} from "../network/network_enums";

// let
export default function DBTable({requestName, formFields, rowName, matchId}) {
	const [tableList, setTableList] = React.useState([]);
	const [showForm, setShowForm] = React.useState(false);
	const [formData, setFormData] = React.useState({});
	const [dataLoaded, setDataLoaded] = React.useState(false);
	// function 
	const [method, setCurrentMethod] = React.useState(null);

	// function createData(name, calories, fat, carbs, protein) {
  		// return { name, calories, fat, carbs, protein };
		// {id,table_name,nrr,nr,lost,won,played,points}  		
	// }


	function openForm(data, method) {
		setFormData(data);
		setCurrentMethod(method);
		setShowForm(true);
	}

 
	React.useEffect(() => {

		 	!dataLoaded && nw.request(requestName, METHOD_TYPES.GET).then((data) => {
				setTableList(data.list);
				setDataLoaded(true);
			}, () => {
				// setTableList([{id: "no match found"}])
			});
	})

	return (
		<React.Fragment>
    <AddEntryIcon {...{rowName, openForm}}/>


		<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <DBTableHeader {...{formFields}}/>
        <TableBody>
          {tableList.map((tableData) => {
            return <DBTableRow {...{requestName, 
              formFields, setDataLoaded, 
              openForm, ...{...tableData.attributes, id: tableData.match_id}}} key={tableData.matchId}/>
          })}
        </TableBody>
      </Table>
    </TableContainer>

    {
      showForm && 
    	(<Form {...{
        heading: "Edit " + rowName, 
        formData, 
        requestName, 
        formFields,  
        method,
        closeMethod: () => {
          setShowForm(false);
          setDataLoaded(false);
        }
      }
      }/>)
    }
	</React.Fragment>
)
}