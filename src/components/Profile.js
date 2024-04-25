import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";

import "../blocks/Profile.css";

const Profile = ({
  onSelectCard,
  onCreateModal,
  onEditProfileModal,
  clothingItems,
  isLoggedIn,
  handleLogOut,
  onCardLike,
}) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="profile">
      <SideBar
        currentUser={currentUser}
        onEditProfileModal={onEditProfileModal}
        handleLogOut={handleLogOut}
      />
      <ClothesSection
        onCreateModal={onCreateModal}
        onSelectCard={onSelectCard}
        clothingItems={clothingItems}
        isLoggedIn={isLoggedIn}
        onCardLike={onCardLike}
      />
    </div>
  );
};
export default Profile;
