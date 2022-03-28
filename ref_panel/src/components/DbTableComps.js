import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {METHOD_TYPES, REST_PARAMS} from "../network/network_enums";
import nw from "../network/network_requests";
import TableSortLabel from "@material-ui/core/TableSortLabel";
               // onClick={createSortHandler(columnPropName)}
import * as React from 'react';
import AddIcon from '@mui/icons-material/AddCircleOutline';
import Checkbox from '@mui/material/Checkbox';
import { useSelector, useDispatch } from 'react-redux';
import {FormField} from "../components/Form";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

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
  const IS_LOGS = requestName.includes('logs');
  let hasWritePermission = useSelector(state => state.login.userInfo.permissions.can_edit) && !IS_LOGS;

   function updateRow(new_data) {
      let rest_param = [REST_PARAMS[METHOD_TYPES.PUT]];
      let updated_data = {...data, ...new_data};
      console.log("updated data");
      console.log(updated_data);
      nw.request(requestName, METHOD_TYPES.POST, rest_param, JSON.stringify(updated_data), () => {
        setDataLoaded(false);
      });
   } 

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

                          let body =  JSON.stringify({[keyField]: data[keyField]});
                          let arr = [body];

                          console.log(arr);
                          console.log(body);
                          nw.request(requestName, METHOD_TYPES.POST, [REST_PARAMS[METHOD_TYPES.DELETE]], 
                            body, 
                            () => {
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
                        formFields.map((fieldData) => {
                          let {name: fieldName, type, fields} = fieldData; 
                          let value = data[fieldName];

                          if(type !== "json") {
                            return <DBTableCell {...{IS_LOGS, value, updateRow, ...fieldData}} key={fieldName}/>
                          } else {
                            let data2 = data[fieldName];
                            return fields.map(({name: fieldName, type}) => {

                              let value = data2[fieldName];
                              
                              return <DBTableCell {...{IS_LOGS, value, updateRow, ...fieldData}} key={fieldName}/>
                            })
                          }

                         
                        })
                      }
                     <IconsCell {...data}/>
                    </TableRow>);

                  
}

function DBTableCell({value, updateRow, IS_LOGS, ...fieldData}) {

    //expanded - null: no need to expand/ collapse, 
      //false: can be expanded
      // true: can be collapsed

    const [editMode, setEditMode] = React.useState(false);
    const {type, fieldName, name} = fieldData;
    const [expanded, setExpanded] = React.useState(null);
    const [displayValue, setDisplayValue] = React.useState("");

   

    React.useEffect(() => {
      if(type === "text" && value && value.length > 100) {
        setExpanded(false);
      } else {
        setExpanded(null);
      }
      
      setDisplayValue(getDisplayValue(value, type, expanded));
    }, [value]);
    

  let hasWritePermission = useSelector(state => state.login.userInfo.permissions.can_edit) &&  !IS_LOGS;
 

  function openEditBox() {
    if(hasWritePermission && fieldData.inForm) {
      setEditMode(true);
    }
  }

   return (<TableCell className="db-table-cell" align={(type=="number")?"center":"center"} 
     key={fieldName}

     >
        
        
        {!editMode &&  (
          <>
          <ToggleExpand 
          {...{ expanded, setDisplayValue, setExpanded, value}}/>

          <span className = {type}
            onDoubleClick = {() => {
              openEditBox();
            }}
          >
            {type === "url"? 
            <a href = {value}>{displayValue}</a>: <DisplaySpan {...{displayValue, type}}/> }
          </span>

          {hasWritePermission && fieldData.inForm && (<EditIcon
          className="in-place-edit-icon"
          onClick={() => {
            openEditBox();
          }}/>)}
          
          </>
         )
        }  
        
        
        {
          editMode && <FormField {...{
            method: METHOD_TYPES.PUT,
            value,
            editMode: true,
            closeInput: (new_value, submitted) => {
              if(submitted && new_value != value) {
                updateRow({
                  [name]: new_value
                });
              }
              
              setEditMode(false);
            },
            ...fieldData
          }}/>
        }

        
        
    </TableCell>)
}

function DisplaySpan({displayValue, type}) {
  let dots = "....";
  let dotted = displayValue && type === "text" && displayValue.includes("....");
  if(dotted) {
    let parts = displayValue.split("....")
    return (<> 
        {parts[0]}
        <span className="dotted">....</span>
        {parts[1]}
      </>);
  } else {
    return <>{displayValue}</>
  }

}

function ToggleExpand({expanded, setDisplayValue, setExpanded, value}) {

  if(expanded === null) {
    return null;
  }

  let finalExpanded = !expanded;
  let finalDisplayValue = getDisplayValue(value, "text", finalExpanded);
  let spanText = expanded? "<<": ">>";

  return <span className={"expand-collapse-cell " + expanded} onClick = {() => {
    setDisplayValue(finalDisplayValue);
    setExpanded(finalExpanded);
  }}><ArrowRightIcon/></span>;

}

function getDisplayValue(value, type, expanded) {
  // function Dotted(){
  //   return (<span>....</span>);
  // }

  if(type === "text" && value && value.length > 100) {
      let len = value.length;
      return expanded? value: value.substr(0, 20) + "...." + value.substr(len-20, len);
    } else if(type === "date") {
      return (new Date(value)).toLocaleString();
    } else {
      return value;
    }

}



