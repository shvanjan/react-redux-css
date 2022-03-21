import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import './App.css';
import PointsTable from "./views/PointsTable";
import TeamsTable from "./views/TeamsTable";
import MatchTableView from "./views/MatchTableView";
import Form from "./components/Form";


import {REQUEST_NAMES, METHOD_TYPES} from "./network/network_enums";
import nw from "./network/network_requests";


// This example has 3 pages: a public page, a protected
// page, and a login screen. In order to see the protected
// page, you must first login. Pretty standard stuff.
//
// First, visit the public page. Then, visit the protected
// page. You're not yet logged in, so you are redirected
// to the login page. After you login, you are redirected
// back to the protected page.
//
// Notice the URL change each time. If you click the back
// button at this point, would you expect to go back to the
// login page? No! You're already logged in. Try it out,
// and you'll see you go back to the page you visited
// just *before* logging in, the public page.

// export default function AuthExample() {
function AuthExample() {
  return (
    <ProvideAuth>
      <Router>
        <header className = "heading">
        <h1> Fancode </h1>
        <AuthButton/>
        </header>

        <div className="container">
          <RouteLinks/>
          
          {/*<MatchIdInput/>*/}
          <RouteList/>
          
        </div>
      </Router>
    </ProvideAuth>
  );
}


function RouteLinks() {

   let user_permissions = {
     read_logs: true,
     READ_CONFIGURATION: true,
     is_admin: true,
     can_edit: true
   }

  let table_types = [
    {
      type: 'Configuration',
      tables: [
      {
          name: 'Campaigns',
          dbName: 'campaigns'
        }, 
        {
          name: 'Tasks',
          dbName: 'tasks'
        },
        {
          name: 'Gratifications',
          dbName: 'gratifications'
        }
        ],
      hasPermission: user_permissions.READ_CONFIGURATION,
      hasWritePermission: user_permissions.can_edit
    },
    {
      type: 'Reports',
      tables: [
        {
          name: 'User Bind Requests',
          dbName: 'user_bind_requests'
        }, 
        {
          name: 'User Mappings',
          dbName: 'user mappings'
        },
        {
          name: 'Gratification Logs',
          dbName: 'gratifications_logs'
        },
        {
          name: 'Task Gratification Logs',
          dbName: 'task_gratifications_logs'
        }
      ],
      hasPermission: user_permissions.read_logs,
      hasWritePermission: user_permissions.can_edit
    },
    {
      type: 'Admin',
      tables: [{
          name: 'Users',
          dbName: 'Users'
        }
      ],
      hasPermission: user_permissions.READ_CONFIGURATION,
      hasWritePermission: user_permissions.can_edit
    },
    {
      type: 'My Profile',
      tables: [{
          name: 'Account Settings',
          dbName: 'settings'
        }
      ],
      hasPermission: true,
      hasWritePermission: true
    }
  ];


  const links = table_types.map(
    ({type, tables, hasPermission, hasWritePermission}) => {
    if(hasPermission) {
      return (
        <li>
          {type}
          <ul>
            {tables.map(({name, dbName}) => {
              return (
                  <li>
                    <Link to={`/${dbName}`}>{`${name}`}</Link>
                  </li>
                )
            })}
          </ul> 
        </li>
      )
    } else {
      return null;
    }
    
  })

  return (
    <nav className="nav item">
    <ul>
        {links}
      </ul>
      </nav>
    );
}

function RouteList() {
  return (
    <Switch>
        {/*<Route path="/public">
          <PublicPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute path="/protected">
          <ProtectedPage />
        </PrivateRoute>*/}
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/points"><PointsTable/></PrivateRoute>
          <PrivateRoute path="/teams"><TeamsTable/></PrivateRoute>
          <PrivateRoute path="/"><MatchTableView/></PrivateRoute>

      </Switch>
    );
}

function MatchIdInput() {
  let input;
  let history = useHistory();
  let auth = useAuth();

  return (

    <div>
      <input type="text" 
      className = "match-input" 
      ref = {(node) => {
        input = node;
      }}
      placeholder = {"enter match id"}
      />

      <button onClick = {() => {

        if(auth.user) {
          history.push(`/match/${input.value}`);
        } else {
          history.push(`/login`);
        }
      }}>go to match</button>
    </div>

    )
}

const fakeAuth = {
  isAuthenticated: false,

  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};


/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = cb => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout
  };
}

function AuthButton() {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
      <button className = "signin_button"
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}

      >
        Sign out
      </button>
  ) : (
    <>
     <button className = "signin_button" onClick={() => {
        // setShowForm(true);
        history.push("/login");
      }}>Sign In</button>

    </>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}

function LoginPage() {
  const [showForm, setShowForm] = React.useState(true);

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    auth.signin(() => {
      history.replace(from);
    });
  };

  return (
    <div>

      {showForm && (<Form {...{
        formData: {}, 
        formFields: [
          {
            fieldName: "User Id",
            name: "user",
            type: "text",
            inForm: true
          },
          {
            fieldName: "Password",
            name: "password",
            type: "password",
            inForm: true
          }
        ],
          requestName: REQUEST_NAMES.LOGIN, 
          method: METHOD_TYPES.POST, 
          heading: "Login Details", 
          showCancel: false,
          closeMethod: ({checksum} = {}) => {
            if(checksum) {
              login();
              nw.setChecksum(checksum);
            }
              // setShowForm(false);

          }
      }}/>)}

     
    </div>
  );
}
