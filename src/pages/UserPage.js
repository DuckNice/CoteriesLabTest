import React from "react";

const UserPage = ({ match }) => {
  const userID = match.params.user;

  return <h1>User is {userID}</h1>;
};

export default UserPage;
