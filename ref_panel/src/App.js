import React from 'react';
import logo from './logo.svg';
import styles from './index.module.css';
import  Popup from "./components/Popup";
import "./mycss.css"
import Header from "./components/header/header";
import Routes, {RouteLinks} from "./Routes";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import {
  setError
} from './features/errors/errorSlice';

import { useSelector, useDispatch } from 'react-redux';
import {selectIsError, selectErrorMessage} from "./features/errors/errorSlice";
// import  Popup from "./components/Popup";

function App() {
  const isError = useSelector(selectIsError);
  const errorMessage = useSelector(selectErrorMessage);
  let dispatch = useDispatch();

  return (
    <div className={styles.root}>
    <Router>
      <section className = {styles.container}>
        <header className={styles.header}><Header/></header>
        <nav className={styles.nav}><RouteLinks/></nav>
        <section className={styles.content}><Routes/></section>
        {isError && <Popup {...{
          heading: "Error", 
        message: errorMessage,
        closeMethod: () => {
          dispatch(setError({isError: false}))
        }
        }}/>}
      </section>

    </Router>

    </div>

  );
}

export default App;
