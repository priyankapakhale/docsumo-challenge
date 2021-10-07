import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://apptesting.docsumo.com/api/v1/eevee/login/",
        { email, password }
      );
      setResponse(response.data);
    } catch (e) {
      setError(e.error);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="login-container">
          <header>
            <div className="logo">
              <Logo />
            </div>
            <h1 className="title">Login to Docsumo</h1>
          </header>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                className="login-input"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className={email === "" ? "input-label" : "label"}>
                Work Email
              </label>
            </div>
            <div className="input-container">
              <input
                className={"login-input"}
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className={password === "" ? "input-label" : "label"}>
                Password
              </label>
            </div>
            <p className={error ? "error" : "error-hidden error"}>{error}</p>
            <button className="primary-button" type="submit">
              LOGIN
            </button>
          </form>

          <footer className="footer">
            <p className="footer-text">Don't have an account?</p>
            <a href="/signup" className="button-link">
              Sign up
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
