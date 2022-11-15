import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles.module.scss";
import app from "../../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: 80,
    marginRight: 15,
  },
}));

const UserInfo = () => {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user.email)
    });
  }, []);

  return (

    <div>
        <h5 className="card-panel teal lighten-2 z-depth-5"> 
          <div className={styles.body}>
            <div className={styles.userData}>
              User 
              {currentUser}
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.userData}>
              User
            </div>
          </div>
        </h5>
    </div>
  );
};

export default UserInfo;
