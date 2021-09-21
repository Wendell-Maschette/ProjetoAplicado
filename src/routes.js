import React from "react";
import pages from "./pages/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={pages.Home} />
          <Route exact path="/quem-somos" component={pages.About} />
          <Route exact path="/duvidas" component={pages.Faq} />
          <Route exact path="/contato" component={pages.Contact} />
          <Route component={() => <div>404 !</div>} />
        </Switch>
      </Router>
    );
  };

export default Routes;
