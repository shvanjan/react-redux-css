import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {METHOD_TYPES} from "../network/network_enums";
import nw from "../network/network_requests";
import TableSortLabel from "@material-ui/core/TableSortLabel";
               // onClick={createSortHandler(columnPropName)}
import * as React from 'react';
import AddIcon from '@mui/icons-material/AddCircleOutline';
import Checkbox from '@mui/material/Checkbox';
import { useSelector, useDispatch } from 'react-redux';



const SORT_ORDERS = {
  ASC: 1,
  DESC: -1
}

export function AddEntryIcon({rowName, openForm}) {
  let canAdd = useSelector(state => state.login.userInfo.permissions.can_edit);
  return canAdd?(
      <div className = "add_div" onClick={() => {
        openForm({}, METHOD_TYPES.POST);
      }}>
        <AddIcon className = "add_icon"/>
        ADD NEW
      </div>
    ): null;
}

export function DBTableHeader({formFields, 
  sortFn, 
  currentSortOrder, currentSortProp}) {

  return (
    <TableHead>
          <TableRow>
            {
              formFields.map((formField, i) => {
                let sortBy = false;
                if(currentSortProp === formField.name) {
                  sortBy = true;
                }
                if(formField.type !== "json") {
                  return <ColumnHead  className = "column_head" 
                  key={formField.name} {...{...formField, sortFn, 
                    sortBy, currentSortOrder}}/>
                  
                } else {
                  return formField.fields.map((formField, i) => {
                    let sortBy = false;
                    if(currentSortProp === formField.name) {
                      sortBy = true;
                    }
                    if(formField.type !== "json") {
                      return <ColumnHead  className = "column_head" key={formField.name} {...{...formField, sortFn, 
                        sortBy, currentSortOrder, canSort: false}}/>
                    }
                  })
                }
              })
            }
            <TableCell align="right"><h3>Action</h3></TableCell>
           
          </TableRow>
        </TableHead>
    )
}

function ColumnHead({fieldName: headerName, name, type, sortFn, 
  sortBy, currentSortOrder, canSort = true} ) {
  const [order, setOrder] = React.useState(SORT_ORDERS.DESC);
  let head;
 // if(sortBy) {
 //   sortFn(order, name);
 //   // return
 // }

  return (
          <TableCell align="center" key={headerName}  onClick = {() => {
            if(!canSort) {
              return;
            }
            setOrder(-order);
            sortFn(order, name);
           
          }}>
          
          
            { 
            (<TableSortLabel className = "abc"
              active={sortBy===true}
              direction={order===SORT_ORDERS.DESC?"asc": "desc"}
            >
            {headerName}
            </TableSortLabel>)
          }
          </TableCell>
         
        )
}



export function DBTableRow({requestName, formFields, setDataLoaded, 
  openForm, keyField,
   handleClick, isItemSelected, labelId, 
  ...data}) {

  let row = {...data};
  let hasWritePermission = useSelector(state => state.login.userInfo.permissions.can_edit);


   function IconsCell(data) {
     return (

       <TableCell align="center" className="icons_cell">
                <VisibilityIcon
                        className="cm-view-icon"
                        onClick={() => {
                          openForm(data, METHOD_TYPES.GET);
                        }}
                      />
                      {hasWritePermission && <EditIcon
                        className="cm-edit-icon"
                        onClick={() => {
                          openForm(data, METHOD_TYPES.PUT);
                        }}
                      />}
                     {hasWritePermission && <DeleteIcon
                        className="cm-delete-icon"
                        onClick={() => {
                          let rest_params = [data[keyField]];
                          if(requestName.includes("/")) {
                            rest_params = [];
                          }
                          nw.request(requestName, METHOD_TYPES.DELETE, rest_params, undefined, () => {
                            setDataLoaded(false);
                          });
                          // showDeleteModal(row.id, row.name);
                        }}
                      />}
            </TableCell>
    );
             
  }

  return (

            /*<TableRow
                      hover
                      onClick={(event) => handleClick(event, row[keyField])}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row[keyField]}
                      selected={isItemSelected}
                    >*/
             <TableRow
                      hover
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row[keyField]}
                      selected={isItemSelected}
                    >
                    {/*  <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>*/}
                      {/*<TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row[keyField]}
                      </TableCell>*/}
                      {
                        formFields.map(({name: fieldName, type, fields}) => {
                          let value = data[fieldName];

                          if(type !== "json") {
                            return <DBTableCell {...{value, type, fieldName}} key={fieldName}/>
                          } else {
                            let data2 = data[fieldName];
                            return fields.map(({name: fieldName, type}) => {

                              let value = data2[fieldName];
                              
                              return <DBTableCell {...{value, type, fieldName}} key={fieldName}/>
                            })
                          }

                         
                        })
                      }
                     <IconsCell {...data}/>
                    </TableRow>);

                  
}

function DBTableCell({value, type, fieldName}) {
    if(type === "date") {
      value = (new Date(value)).toLocaleString()
    }



   return (<TableCell align={(type=="number")?"right":"center"} key={fieldName}>
                      <span className = {type}>
                      {type === "url"? 
                      <a href = {value}>{value}</a>: value }
                      </span>
                      
                      </TableCell>)
}