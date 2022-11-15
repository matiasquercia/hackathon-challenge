import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserInfo from "./components/UserInfo/UserInfo";
import TopDevelopers from "./pages/TopDevelopers/TopDevelopers";


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute exact path="/home" component={Dashboard} />
            <PrivateRoute exact path="/top-developers" component={TopDevelopers} />
            <PrivateRoute exact path="/user-info" component={UserInfo} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
