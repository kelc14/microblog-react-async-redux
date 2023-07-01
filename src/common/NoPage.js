import React from "react";
import { Link } from "react-router-dom";
import "./NoPage.css";

const NoPage = () => {
  return (
    <p className="NoPage">
      Sorry, we can't seem to find the page you are looking for.{" "}
      <Link to="/">Return home?</Link>{" "}
    </p>
  );
};
export default NoPage;
