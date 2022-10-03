import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { authenticate } from "../../store";

const AuthForm = (props) => {
  const { name, handleSubmit, error } = props;

  return (
    <div className="form">
      <form onSubmit={handleSubmit} name={name}>
        {name === "signup" ? (
          <div className="signup-container">
            <p className="signup-title">Sign Up</p>
            <div className="form-container">
              <label className="form-label">username</label>
              <div className="form-input-container">
                <input
                  className="form-input"
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                />
              </div>
            </div>

            <div className="form-container">
              <label className="form-label">email</label>
              <div className="form-input-container">
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            <div className="form-container">
              <label className="form-label">password</label>
              <div className="form-input-container">
                <input
                  className="form-input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              {error && <div className="error-message"> {error} </div>}
            </div>
            <div className="signup-btn-container">
              <button className="button signup-btn" type="submit">
                Sign Up
              </button>
              <p className="form-small-text">Have an account? </p>
              <Link to="/login" className="sign-up">
                Sign in
              </Link>
              <Link to="/disclaimer" className="form-disclaimer">
                Disclaimer
              </Link>
            </div>
          </div>
        ) : (
          <div className="login-container">
            <p className="login-title">Log In</p>

            <div className="form-container">
              <label className="form-label">username</label>
              <div className="form-input-container">
                <input
                  className="form-input"
                  type="username"
                  name="username"
                  placeholder="Username"
                  required
                />
              </div>
            </div>

            <div className="form-container">
              <label className="form-label">password</label>
              <div className="form-input-container">
                <input
                  className="form-input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
            </div>

            <div className="login-btn-container">
              {error && <div className="error-message"> {error} </div>}
              <button className="button login-btn" type="submit">
                Sign In
              </button>
              <p className="form-small-text">Don't have an account? </p>
              <Link to="/signup" className="sign-up">
                Sign up now
              </Link>
              <Link to="/disclaimer" className="form-disclaimer">
                Disclaimer
              </Link>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login",
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Create Account",
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  let email = "";
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      if (evt.target.name === "signup") {
        email = evt.target.email.value;
      }
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      dispatch(authenticate(username, email, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
