import React from "react";
import { Route, Switch } from "react-router-dom";
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
        <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/home" exact component={Dashboard} />
            <PrivateRoute path="/top-developers" exact component={TopDevelopers} />
            <PrivateRoute path="/user-info" exact component={UserInfo} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
        </Switch>
    </AuthProvider>
  );
};

export default App;
