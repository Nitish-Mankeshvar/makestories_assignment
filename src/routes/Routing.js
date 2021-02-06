import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./index";

// routing function
const routing = (routes) => {
  return routes.map(({ path, guard, Component }) => {
    const Guard = guard || React.Fragment;
    return (
      <Route key={path} exact path={path}>
        <Guard>
          <Component />
        </Guard>
      </Route>
    );
  });
};

const Routes = () => {
  return <Switch>{routing(routes)}</Switch>;
};

export default Routes;
