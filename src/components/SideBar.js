import avatarImage from "../images/avatar.svg";

const SideBar = () => {
  return (
    <>
      <div className="profile__sidebar">
        <img
          src={avatarImage}
          alt="avatar"
          className="profile__sidebar-picture"
        />
        <p className="profile__sidebar-text">Terrence Tegegne</p>
      </div>
    </>
  );
};

export default SideBar;
