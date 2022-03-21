import { useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation
} from "react-router-dom";
import App from "./App";

import PointsTable from "./views/PointsTable";
import TeamsTable from "./views/TeamsTable";
import CampaignsTable from "./views/CampaignsTable";
import LoginPage from "./views/LoginPage";
import {REQUEST_NAMES} from "./network/network_enums";

	const TABLE_TYPES = {
		CONFIGURATION: 'Configuration',
		LOGS: "Reports",
		ADMIN: 'Admin'
	}

 let table_types = [
    {
      type: TABLE_TYPES.CONFIGURATION,
      tables: [
      	{
          name: 'Campaigns',
          dbName: REQUEST_NAMES.CAMPAIGNS,
          component: CampaignsTable
        }, 
        {
          name: 'Tasks',
          dbName: REQUEST_NAMES.TASKS,
          component: CampaignsTable
        },
        {
          name: 'Gratifications',
          dbName: REQUEST_NAMES.GRATIFICATIOS,
          component: TeamsTable

        }
        ]
    },
    {
      type: TABLE_TYPES.LOGS,
      tables: [
        {
          name: 'User Bind Requests',
          dbName: REQUEST_NAMES.USER_BIND_REQUESTS,
          component: TeamsTable
        }, 
        {
          name: 'User Mappings',
          dbName: REQUEST_NAMES.USER_MAPPINGS,
          component: TeamsTable
        },
        {
          name: 'Gratification Logs',
          dbName: REQUEST_NAMES.GRATIFICATION_LOGS,
          component: TeamsTable
        },
        {
          name: 'Task Gratification Logs',
          dbName: REQUEST_NAMES.TASK_GRATIFICATION_LOGS,
          component: TeamsTable
        }
      ]
    },
    {
      type: TABLE_TYPES.ADMIN,
      tables: [{
          name: 'Users',
          dbName: 'Users',
          component: TeamsTable

        }
      ]
    },
    {
      type: 'My Profile',
      tables: [{
          name: 'Account Settings',
          dbName: 'settings',
          component: TeamsTable

        }
      ],
    }
  ];

export default function AllRoutes() {

	let user_permissions = useSelector(state => state.login.userInfo.permissions);
	 let all_routes = [];
    
	 function getRoute(type, name, dbName, component) {
	 	return <Route exact key={`${dbName}`} path={`/${type}/${dbName}`} element={
       <PrivateRoute>
         {component()}
       </PrivateRoute>
     }></Route>;
	 }  

    table_types.map(
    	({type, tables}) => {
          {tables.map(({name, dbName, component}) => {
           
           all_routes.push({
           	type, name, dbName, component
           })

      			
          })}
	  });

     return (
     		<Routes>
          		<Route path="/" element = ""></Route>
              <Route path="/login" element = {<LoginPage/>}></Route>

     			{all_routes.map(({type, name, dbName, component}) => {
     				return getRoute(type, name, dbName, component);
     			})}
     		</Routes>
     	)
}

function PermissionDenied() {
	return (<div> Permission Denied </div>);
}

export function RouteLinks() {
  const isAuthenticated = useSelector(state => state.login.isAuthenticated);
	let user_permissions = useSelector(state => state.login.userInfo.permissions);

    if(isAuthenticated) {


      const links = table_types.map(
      	({type, tables}) => {
  	    if(hasPermission(type, user_permissions)) {
  	      return (
  	        <li className="table_type" key={type}>
  	          {type}
  	          <ul className="table_link_list">
  	            {tables.map(({name, dbName}) => {
  	              return (
  	                  <li className="table_link" key={dbName}>
  	                    <Link to={`/${type}/${dbName}`}>{`${name}`}</Link>
  	                  </li>
  	                )
  	            })}
  	          </ul> 
  	        </li>
  	      )
      } else {
        return null;
      }
      
    });

      return (<ul className="table_type_list">{links}</ul>);
    }

    return null;

}

function hasPermission(table_type, user_permissions, tableName) {
	let {read_logs,
     read_configuration,
     is_admin,
     can_edit} = user_permissions;

	switch(table_type) {
		case TABLE_TYPES.CONFIGURATION:
		 return read_configuration;
		case TABLE_TYPES.LOGS:
			return read_logs;
		case TABLE_TYPES.ADMIN:
			return is_admin;
	}

	return false;
}

function PrivateRoute({ children }){
  const isAuthenticated = useSelector(state => state.login.isAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}