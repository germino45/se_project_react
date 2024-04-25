import { useState, useContext } from "react";
import ModalWithForm from "./ModalWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

const EditProfileModal = ({ isOpen, onClose, onSubmitClick }) => {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name || "");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [avatar, setAvatar] = useState(currentUser.avatar || "");
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmitClick({ name, avatar });
  };

  return (
    <ModalWithForm
      title="Change profile data"
      buttonSubmitText="Save changes"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      name="edit">
      <label>
        Name *<br></br>
        <input
          className="form__input"
          type="text"
          name="name"
          placeholder="Name"
          minLength="1"
          value={name}
          onChange={handleNameChange}></input>
      </label>
      <br></br>
      <label>
        Avatar *<br></br>
        <input
          className="form__input"
          type="url"
          name="avatar"
          placeholder="Avatar Url"
          value={avatar}
          onChange={handleAvatarChange}></input>
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
