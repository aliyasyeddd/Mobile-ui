import React from "react";
import camera from "../../assets/camera-icon.png";
import profile from "../../assets/profile-pic.png";

const Account = () => {
  return (
    <div>
      <h1>Account Settings</h1>
      <img src={profile} alt="Profile pic" />
      <img src={camera} alt="camera icon" />
      <h2>Marry Doe</h2>
      <p>Marry@Gmail.Com</p>
      <p>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
};

export default Account;
