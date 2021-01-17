import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListContainer from "./Containers/ListContainer";
import AddLinkContainer from "./Containers/AddLinkContainer";
import LayoutUI from "./Containers/LayoutUI";

const AppContainer: React.FC = () => (
  <Router>
    <Switch>
      <LayoutUI>
        <Route exact path="/">
          <ListContainer />
        </Route>
        <Route path="/addlink">
          <AddLinkContainer />
        </Route>
      </LayoutUI>
    </Switch>
  </Router>
);

export default AppContainer;
