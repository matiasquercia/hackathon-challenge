import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import app from "../../firebase";

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
