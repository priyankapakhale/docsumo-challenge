import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const HomePage = () => {
  const { user } = useSelector((state) => state);

  return !user ? (
    <Redirect to="/login" />
  ) : (
    <h1 className="hello">{`Hello ${user.full_name}`}</h1>
  );
};

export default HomePage;
