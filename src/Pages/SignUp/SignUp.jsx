import React from "react";

const SignUp = () => {
  return (
    <form action="">
      <div>
        <h1>Create your PopX account</h1>
        <input type="text" />
        <label htmlFor=""></label>
        <input type="text" />
        <label htmlFor=""></label>
        <input type="text" />
        <label htmlFor=""></label>
        <input type="text" />
        <label htmlFor=""></label>
        <input type="text" />
        <label htmlFor=""></label>
        <p>Are you an Agency?*</p>
        <label>
          <input type="radio" name="response" value="yes" checked /> Yes
        </label>

        <label>
          <input type="radio" name="response" value="no" /> No
        </label>

        <button>Create Account</button>
      </div>
    </form>
  );
};

export default SignUp;
