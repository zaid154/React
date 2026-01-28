import React from "react";
import modi from "../assets/modi.jpg";
import "./UserCard.css";

const UserCard = () => {
  return (
    <div className="user_card">
      <img src={modi} alt="User" />
      <h3>Mohd Zaid</h3>
      <p>Frontend Developer | React Learner</p>
    </div>
  );
};

export default UserCard;
