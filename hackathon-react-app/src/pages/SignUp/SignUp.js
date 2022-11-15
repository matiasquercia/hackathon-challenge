import { Card } from "@material-ui/core";
import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../../firebase";


const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
      <Card>
        <h1>Registrarse en Hackathon App</h1>
        <form onSubmit={handleSignUp}>
          <label>
            Email
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label>
            Password
            <input name="password" type="password" placeholder="Password" />
          </label>
          <button type="submit" className="waves-effect waves-light btn">Registrar Cuenta</button>
        </form>
      </Card>
    </div>

  );
};

export default withRouter(SignUp);
