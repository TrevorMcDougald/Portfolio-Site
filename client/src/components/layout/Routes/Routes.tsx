import React, { FunctionComponent } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Resume from "../../Resume/Resume";
import ContactForm from "../../ContactForm/ContactForm";

interface OwnProps {}

type Props = OwnProps;

const Routes: FunctionComponent<Props> = (props) => {
  return (
    <Switch>
      <Route component={LandingPage} exact path='/' />
      <Route component={Resume} path='/resume' />
      <Route component={ContactForm} path='/contact' />
      <Redirect to='/' />
    </Switch>
  );
};

export default Routes;
