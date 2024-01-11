import "../blocks/Header.css";
import ToggleSwitch from "./ToggleSwitch";
import logoImage from "../images/logo.svg";
import avatarImage from "../images/avatar.svg";
import { Link } from "react-router-dom";

const Header = ({ onCreateModal }) => {
  console.log("Header");

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

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
        <button type="text" className="header__button" onClick={onCreateModal}>
          + Add clothes
        </button>
        <Link to="/profile">
          <button className="header__profile-text">Terrence Tegegne</button>
        </Link>

        <img src={avatarImage} alt="avatar" />
      </div>
    </header>
  );
};

export default Header;
