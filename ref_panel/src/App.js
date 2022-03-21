import React from 'react';
import logo from './logo.svg';
import styles from './index.module.css';
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


function App() {
  return (
    <div className={styles.root}>
    <Router>
      <section className = {styles.container}>
        <header className={styles.header}><Header/></header>
        <nav className={styles.nav}><RouteLinks/></nav>
        <section className={styles.content}><Routes/></section>
      </section>

    </Router>

    </div>

  );
}

export default App;
