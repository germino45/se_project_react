const SideBar = ({ currentUser, onEditProfileModal, handleLogOut }) => {
  return (
    <>
      <div className="profile__sidebar">
        <div className="profile__sidebar-header">
          <img
            src={currentUser.avatar}
            alt="avatar"
            className="profile__sidebar-picture"
          />
          <p className="profile__sidebar-text">{currentUser.name}</p>
        </div>
        <div className="profile__sidebar-buttons"></div>
        <button
          type="button"
          className="profile__sidebar-button-one"
          onClick={onEditProfileModal}>
          Change profile data
        </button>
        <button
          type="button"
          className="profile__sidebar-button-two"
          onClick={handleLogOut}>
          Log out
        </button>
      </div>
    </>
  );
};

export default SideBar;
