import "../blocks/Header.css";

const Header = ({ onCreateModal }) => {
  console.log("Header");

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__group">
        <img src={require("../images/logo.svg").default} alt="logo" />
        <div>{currentDate}, Chicago</div>
      </div>
      <div className="header__group">
        <button type="text" className="header__button" onClick={onCreateModal}>
          + Add clothes
        </button>
        <div>Terrence Tegegne</div>
        <img src={require("../images/avatar.svg").default} alt="avatar" />
      </div>
    </header>
  );
};

export default Header;
