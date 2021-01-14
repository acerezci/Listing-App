import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListContainer from "./containers/ListContainer";
import AddLinkContainer from "./containers/AddLinkContainer";
import LayoutUI from "./containers/LayoutUI";

const AppContainer: React.FC = () => {
  return (
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
};

export default AppContainer;
