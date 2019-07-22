import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "~/pages/SignIn";
import SignUp from "~/pages/SignUp";

import Dashboard from "~/pages/Dashboard";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignUp} />
      <Route path="/sign-in" component={SignIn} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
}
