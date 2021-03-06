import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/shared/NavBar/NavBar";
import Home from "./containers/Home/Home";
import Login from "./containers/Login";
import CompleteProfile from "./containers/CompleteProfile";
import Dashboard from "../src/Dashboard/Dashboard";
import Matches from "./containers/Matches";
import FindNewMatch from "./containers/FindNewMatch";
import NotFound from "./containers/NotFound";

function App(props) {
  return (
    
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/login" component={(props) => <Login {...props} />}   />
          <Route exact path="/complete-profile">
            <CompleteProfile />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/matches">
            <Matches />
          </Route>
          <Route exact path="/new-match">
            <FindNewMatch />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>

    
  );
}


export default App;
