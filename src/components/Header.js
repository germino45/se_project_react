import "../blocks/Header.css";
import ToggleSwitch from "./ToggleSwitch";
import logoImage from "../images/logo.svg";

import { Link } from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useContext } from "react";

const Header = ({
  onCreateModal,
  onLoginModal,
  onRegisterModal,
  isLoggedIn,
}) => {
  console.log("Header");

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const currentUser = useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="header__group">
        <Link to="/">
          <img src={logoImage} alt="logo" />
        </Link>

        <div>{currentDate}, Chicago</div>
      </div>
      <div className="header__group">
        <ToggleSwitch />
        {isLoggedIn ? (
          <button
            type="text"
            className="header__button"
            onClick={onCreateModal}>
            + Add clothes
          </button>
        ) : (
          <button
            type="text"
            className="header__button"
            onClick={onRegisterModal}>
            Sign Up
          </button>
        )}
        {isLoggedIn ? (
          <Link to="/profile">
            <button type="button" className="header__profile-text">
              {currentUser.name}
            </button>
          </Link>
        ) : (
          <button
            type="text"
            className="header__profile-text"
            onClick={onLoginModal}>
            Log In
          </button>
        )}
        {isLoggedIn ? (
          <img
            className="header__profile-picture"
            src={currentUser.avatar}
            alt="avatar"
          />
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default Header;
