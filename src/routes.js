import React from "react";
import pages from "./pages/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = () => {
    return (
      <Router>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={pages.Home} />
          <Route exact path={process.env.PUBLIC_URL + '/quem-somos'} component={pages.About} />
          <Route exact path={process.env.PUBLIC_URL + '/duvidas'} component={pages.Faq} />
          <Route exact path={process.env.PUBLIC_URL + '/contato'} component={pages.Contact} />
          <Route component={() => <div>Error 404 !</div>} />
        </Switch>
      </Router>
    );
  };

export default Routes;
