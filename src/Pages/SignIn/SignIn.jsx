import React from "react";
import "./SignIn.css";

const SignIn = () => {
  return (
    <form action="">
      <div>
        <h1>Signin to your PopX account</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <div className="input-container">
          <input
            type="email"
            id="email-address"
            autoComplete="off"
            class="text-input"
            required
            placeholder="Enter email address"
          />
          <label for="Email Address" className="label">
            Email Address
          </label>
          <input
            type="password"
            id="password"
             autoComplete="off"
            class="text-input"
            required
            placeholder="Enter password"
          />
          <label for="password" className="label">
            Password
          </label>
        </div>
        <button disabled>Login</button>
      </div>
    </form>
  );
};

export default SignIn;
