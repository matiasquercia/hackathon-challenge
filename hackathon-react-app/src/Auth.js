import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar.js";
import SideBar from "./components/SideBar/SideBar.js";
import app from "./firebase.js";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      <Router>
        {currentUser ? (
          <div>
            <SideBar />
            <NavBar />
          </div>
        ) : null}

        {children}
      </Router>
    </AuthContext.Provider>
  );
};
