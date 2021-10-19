import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const { signInUsingGoogle, SignupUsingEmail, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    SignupUsingEmail(email, password);
  };
  return (
    <div className="row">
      <div className="p-5 shadow m-auto my-5 col-md-3 col-sm-6 col-xs-6">
        <h3 className="text-center">Please Register</h3>
        <form onSubmit={handleSubmitForm}>
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  id="form3Example1"
                  className="form-control border"
                />
                <label className="form-label" htmlFor="form3Example1">
                  First name
                </label>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  id="form3Example2"
                  className="border form-control"
                />
                <label className="form-label" htmlFor="form3Example2">
                  Last name
                </label>
              </div>
            </div>
          </div>

          <div className="form-outline mb-4">
            <input
              type="email"
              id="form3Example3"
              onBlur={handleEmail}
              className="border form-control"
            />
            <label className="form-label" htmlFor="form3Example3">
              Email address
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="form3Example4"
              onBlur={handlePassword}
              className="border form-control"
            />
            <label className="form-label" htmlFor="form3Example4">
              Password
            </label>
          </div>
          <div className="form-outline mb-4">
            <input
              type="password"
              id="form3Example5"
              className="border form-control"
            />
            <label className="form-label" htmlFor="form3Example5">
              Confirm Password
            </label>
          </div>

          <div className="form-check d-flex justify-content-center mb-4">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="form2Example33"
            />
            <label className="form-check-label" htmlFor="form2Example33">
              Subscribe to our newsletter
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-4">
            Sign up
          </button>

          <div className="text-center">
            <p>or sign up with:</p>
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button
              type="button"
              onClick={signInUsingGoogle}
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
    </div>
  );
};

export default Signup;
