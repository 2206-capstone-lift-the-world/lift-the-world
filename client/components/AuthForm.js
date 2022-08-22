import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { authenticate } from '../store';

const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;
  return (
    <div className="form">
      <form onSubmit={handleSubmit} name={name}>
        {name === 'signup' ? (
          <div className="signup-container">
            <p className="signup-title">Sign up for Lift the World</p>
            <div className="form-container">
              <label className="form-label">first name</label>
              <div className="form-input-container">
                <input
                  className="form-input"
                  type="text"
                  name="firstName"
                  placeholder="First name"
                />
              </div>
            </div>

            <div className="form-container">
              <label className="form-label">last name</label>
              <div className="form-input-container">
                <input
                  className="form-input"
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="form-container">
              <label className="form-label">email</label>
              <div className="form-input-container">
                <input
                  className="form-input"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="form-container">
              <label className="form-label">username</label>
              <div className="form-input-container">
                <input
                  className="form-input"
                  type="text"
                  name="username"
                  placeholder="Username"
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
                />
              </div>
            </div>
            <div className="signup-btn-container">
              <button className="button signup-btn" type="submit">
                Sign Up
              </button>
              <p className="form-disclaimer">Disclaimer</p>
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
                />
              </div>
            </div>

            <div className="login-btn-container">
              <button className="button login-btn" type="submit">
                Sign In
              </button>
              <p className="form-small-text">Don't have an account?</p>
              <Link to="/signup">
                <button className="button signup-btn" type="submit">
                  Create new account
                </button>
              </Link>

              <p className="form-disclaimer">Disclaimer</p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Create Account',
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  let firstName = '';
  let lastName = '';
  let email = '';
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      if (evt.target.name === 'signup') {
        firstName = evt.target.firstName.value;
        lastName = evt.target.lastName.value;
        email = evt.target.email.value;
      }
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      dispatch(
        authenticate(firstName, lastName, email, username, password, formName)
      );
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
