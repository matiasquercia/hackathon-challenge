import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../firebase.js";
import { AuthContext } from "../../Auth.js";
import "../../styles/style.css";
import wave from "../../assets/img/wave.png";
import avatar from "../../assets/img/avatar.svg";
import bg from "../../assets/img/bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";


const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login">
      <img className="wave" src={wave} alt="wave" />
      <div className="container">
        <div className="img">
          <img src={bg} alt="bg" />
        </div>
        <div className="login-content">
          <form onSubmit={handleLogin}>
            <img src={avatar} alt="avatar" />
            <h2 className="title">Hackathon App</h2>
            <div className="input-div one">
              <div className="i">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="div">
                <input name="email" type="email" placeholder="Email" />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <div className="div">
                <input name="password" type="password" placeholder="Contraseña" />
              </div>
            </div>
            <a href="/signup">Sign Up</a>
            <input type="submit" className="btn" value="ingresar" />
          </form>
        </div>
      </div>

      <script src="https://kit.fontawesome.com/a81368914c.js"></script>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:600&display=swap"
        rel="stylesheet"
      />
    </div>
  );
};

export default withRouter(Login);
