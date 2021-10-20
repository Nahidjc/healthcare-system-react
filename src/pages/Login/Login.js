import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle, SigninUsingEmail, errorComponent } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const location_url = location.state?.from || "/";
  const history = useHistory();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    SigninUsingEmail(email, password);
    history.push(location_url);
  };

  const GoogleSignInFunction = () => {
    signInUsingGoogle();
    history.push(location_url);
  };
  return (
    <div className="p-5 shadow m-auto my-5" style={{ width: "25%" }}>
      <h3 className="text-center">Please Login</h3>
      {errorComponent}
      <form onSubmit={handleSubmitForm}>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control border"
            onBlur={handleEmail}
          />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            onBlur={handlePassword}
            className="border form-control"
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example34"
              />
              <label className="form-check-label" htmlFor="form2Example34">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>

        <div className="text-center">
          <p>
            Not a member? <Link to="/register">Register</Link>
          </p>
          <p>or sign up with:</p>
          <button type="button" className="btn btn-primary btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </button>

          <button
            type="button"
            onClick={GoogleSignInFunction}
            className="btn btn-primary btn-floating mx-1"
          >
            <i className="fab fa-google"></i>
          </button>

          <button type="button" className="btn btn-primary btn-floating mx-1">
            <i className="fab fa-twitter"></i>
          </button>

          <button type="button" className="btn btn-primary btn-floating mx-1">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
