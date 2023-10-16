import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Profile from "../components/Profile";

import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
export default function PageContents({ ref }) {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </Switch>
  );
}
