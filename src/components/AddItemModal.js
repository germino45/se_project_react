import { useState } from "react";
import ModalWithForm from "./ModalWithForm";

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [imageUrl, setUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const [weather, setWeather] = useState("");
  const handleWeatherChange = (e) => {
    console.log(e.target.value);
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
  };

  return (
    <ModalWithForm
      title="New Garment"
      buttonSubmitText="Add garment"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      name="add-garment">
      <label>
        Name <br></br>
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
        Image <br></br>
        <input
          className="form__input"
          type="url"
          name="imageUrl"
          placeholder="Image URL"
          value={imageUrl}
          onChange={handleUrlChange}></input>
      </label>
      <p className="form__weather-list">Select weather type:</p>
      <div>
        <div>
          <input
            type="radio"
            id="hot"
            value="hot"
            name="weather"
            className="form__weather-selector"
            onChange={handleWeatherChange}
          />
          <label>Hot</label>
        </div>
        <div>
          <input
            type="radio"
            id="warm"
            value="warm"
            name="weather"
            className="form__weather-selector"
            onChange={handleWeatherChange}
          />
          <label>Warm</label>
        </div>
        <div>
          <input
            type="radio"
            id="cold"
            value="cold"
            name="weather"
            className="form__weather-selector"
            onChange={handleWeatherChange}
          />
          <label>Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
