import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import { useState, useEffect } from "react";
import { getForecastWeather, parseWeatherData } from "../utils/weatherApi";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="app">
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm
          title="New Garment"
          buttonText="Add garment"
          onClose={handleCloseModal}
          name="add-garment">
          <label>
            Name <br></br>
            <input
              className="form__input"
              type="text"
              name="name"
              placeholder="Name"
              minLength="1"></input>
          </label>
          <br></br>
          <label>
            Image <br></br>
            <input
              className="form__input"
              type="url"
              name="Image URL"
              placeholder="Image URL"></input>
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
              />
              <label>Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
