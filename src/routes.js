import React from "react";
import pages from "./pages/index";
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";

import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Home from "./pages/home";

const Routes = () => {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} render={props => <><Navigation /><Home {...props} /><Footer /></>} />
        <Route exact path={process.env.PUBLIC_URL + '/quem-somos'} component={pages.About} />
        <Route exact path={process.env.PUBLIC_URL + '/duvidas'} component={pages.Faq} />
        <Route exact path={process.env.PUBLIC_URL + '/contato'} component={pages.Contact} />
        <Route component={() => <div>Error 404 !</div>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
