import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

/** HeaderComponent
 *
 * Displays blog name and links to homepage (blog) and adding a new post
 *
 *
 *  NO PROPS
 */

const Header = () => {
  return (
    <div className="Header">
      <h1 className="Header-heading">Microblog</h1>
      <p className="Header-subheading">Get in the Rithm of blogging!</p>

      <div className="Header-links-container">
        <Link to="/">Blog</Link>
        <Link to="/new">Add a new post</Link>
      </div>
    </div>
  );
};

export default Header;
