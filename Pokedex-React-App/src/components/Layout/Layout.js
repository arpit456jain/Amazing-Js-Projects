import React from "react";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

const Layout = props => {
  return (
    <React.Fragment>
      <header>
        <MainNavigation></MainNavigation>
      </header>
      <main className={classes.container}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
