import React from "react";
import { BrowserRouter as Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Faq from "./pages/faq";
import Contact from "./pages/contact";

const Routes = () => {

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} render={props => <><Home {...props} /></>} />
        <Route exact path={process.env.PUBLIC_URL + '/quem-somos'} render={props => <><About {...props} /></>} />
        <Route exact path={process.env.PUBLIC_URL + '/duvidas'} render={props => <><Faq {...props} /></>}/>
        <Route exact path={process.env.PUBLIC_URL + '/contato'} render={props => <><Contact {...props} /></>}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
