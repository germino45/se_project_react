import "../blocks/Header.css";
import logoImage from "../images/logo.svg";
import avatarImage from "../images/avatar.svg";

const Header = ({ onCreateModal }) => {
  console.log("Header");

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__group">
        <img src={logoImage} alt="logo" />
        <div>{currentDate}, Chicago</div>
      </div>
      <div className="header__group">
        <button type="text" className="header__button" onClick={onCreateModal}>
          + Add clothes
        </button>
        <div>Terrence Tegegne</div>
        <img src={avatarImage} alt="avatar" />
      </div>
    </header>
  );
};

export default Header;
