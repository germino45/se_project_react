import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";

import "../blocks/Profile.css";

const Profile = ({ onSelectCard, onCreateModal, clothingItems }) => {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        onCreateModal={onCreateModal}
        onSelectCard={onSelectCard}
        clothingItems={clothingItems}
      />
    </div>
  );
};
export default Profile;
