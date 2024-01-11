import React from "react";
import { Link } from "react-router-dom";
import Bye from "../images/404.png";
import "../blocks/PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="not-found">
      <img className="not-found__image" src={Bye} alt="" />
      <p className="not-found__text">
        Uh-oh! Looks like you strayed away from the path!
      </p>
      <Link className="button button_type_to-main" to="/">
        Try Main Page
      </Link>
    </div>
  );
};

export default PageNotFound;
