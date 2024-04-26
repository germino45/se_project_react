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
  return (
    <div className="profile">
      <SideBar
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
