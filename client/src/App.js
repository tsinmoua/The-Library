import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search.js";
import Saved from "./pages/Saved.js";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path={["/", "/search"]}>
          <Search />
        </Route>

        <Route exact path="/saved">
          <Saved />
        </Route>

        <Route>
          <NoMatch />
        </Route>

      </Switch>
    </Router>
  )
}


export default App;
