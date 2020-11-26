import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  )
}


export default App;
