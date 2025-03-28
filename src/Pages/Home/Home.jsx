import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main">
      <h1 className="header">Welcome to PopX</h1>
      <p className="para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <div className="button-Container">
      <button className="create-btn">Create Account</button>
      <button className="register-btn">Already Registered? Login</button>
      </div>
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/address">Address</Link>
    </div>
  );
};

export default Home;
