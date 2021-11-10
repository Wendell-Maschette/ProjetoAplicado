import React from "react";
import pages from "./pages/index";
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";

import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Faq from "./pages/faq";
import Contact from "./pages/contact";

const Routes = () => {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} render={props => <><Navigation /><Home {...props} /><Footer /></>} />
        <Route exact path={process.env.PUBLIC_URL + '/quem-somos'} render={props => <><Navigation /><About {...props} /><Footer /></>} />
        <Route exact path={process.env.PUBLIC_URL + '/duvidas'} render={props => <><Navigation /><Faq {...props} /><Footer /></>}/>
        <Route exact path={process.env.PUBLIC_URL + '/contato'} render={props => <><Navigation /><Contact {...props} /><Footer /></>}/>
        <Route component={() => <div>Error 404 !</div>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
