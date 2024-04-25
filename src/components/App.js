import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import api from "../utils/api";
import ItemModal from "./ItemModal";
import Profile from "./Profile";
import AddItemModal from "./AddItemModal";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import EditProfileModal from "./EditProfileModal";
import ProtectedRoute from "./ProtectedRoute";
import * as auth from "../utils/auth";
import { getToken, handleToken, removeToken } from "../utils/token";

import PageNotFound from "./PageNotFound";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { getForecastWeather, parseWeatherData } from "../utils/WeatherApi";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [clothingItems, setClothingItems] = useState([]);
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const history = useHistory();
  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleAddItem = (item) => {
    const token = getToken();
    api
      .addItem(item, token)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCardDelete = () => {
    const token = getToken();
    api
      .removeItem(selectedCard._id, token)
      .then(() => {
        setClothingItems((cards) =>
          cards.filter((c) => c._id !== selectedCard._id)
        );
      })
      .then(handleCloseModal)
      .catch((err) => console.log(err));
  };

  const handleCardLike = (id, isLiked) => {
    const token = getToken();

    !isLiked
      ? api
          .addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard : c))
            );
          })
          .catch((err) => {
            console.log(err);
          })
      : api
          .removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard : c))
            );
          })
          .catch((err) => {
            console.log(err);
          });
  };

  useEffect(() => {
    api
      .getItemList()
      .then((items) => {
        setClothingItems(items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  /* --------------------------------- modals --------------------------------- */
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

  const handleDeleteModal = () => {
    setActiveModal("delete");
  };

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleEditProfileModal = () => {
    setActiveModal("edit");
  };
  /* ------------------------------ registration ------------------------------ */
  const handleRegistrationSubmit = (values) => {
    auth
      .signup(values)
      .then((res) => {
        handleLoginModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  /* ---------------------------------- login --------------------------------- */
  const handleLoginSubmit = (values) => {
    auth
      .signin(values)
      .then((res) => {
        if (res.token) {
          handleToken(res.token);
          return auth.getContent(getToken());
        }
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
        handleCloseModal();
        history.push("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdateProfileSubmit = (values) => {
    auth
      .updateProfile(getToken(), values)
      .then((userData) => {
        setCurrentUser(userData);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogOut = () => {
    removeToken();
    setIsLoggedIn(false);
    history.push("/");
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

  useEffect(() => {
    const jwt = getToken();
    if (!jwt) {
      return;
    }
    auth.getContent(jwt).then(({ name, avatar, email, _id }) => {
      setCurrentUser({
        name,
        avatar,
        email,
        _id,
      });
      setIsLoggedIn(true);
      history.push("/profile");
    });
  }, [history]);

  //protect profile route
  //TODO: implement switcher for sign in/register modals
  //TODO: header switcher for logged in and non-logged in users
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
          <Header
            onCreateModal={handleCreateModal}
            onRegisterModal={handleRegisterModal}
            onLoginModal={handleLoginModal}
            isLoggedIn={isLoggedIn}
          />
          <Switch>
            <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
              <Profile
                onEditProfileModal={handleEditProfileModal}
                onSelectCard={handleSelectedCard}
                onCreateModal={handleCreateModal}
                clothingItems={clothingItems}
                handleLogOut={handleLogOut}
                isLoggedIn={isLoggedIn}
                onCardLike={handleCardLike}
              />
            </ProtectedRoute>
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
                isLoggedIn={isLoggedIn}
                onCardLike={handleCardLike}
              />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <Footer />

          {activeModal === "register" && (
            <RegisterModal
              isOpen={activeModal === "register"}
              onSubmitClick={handleRegistrationSubmit}
              onRedirectClick={handleLoginModal}
              onClose={handleCloseModal}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              isOpen={activeModal === "login"}
              onClose={handleCloseModal}
              onRedirectClick={handleRegisterModal}
              onSubmitClick={handleLoginSubmit}
            />
          )}
          {activeModal === "create" && (
            <AddItemModal
              isOpen={activeModal === "create"}
              onClose={handleCloseModal}
              onAddItem={handleAddItem}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onClick={handleDeleteModal}
            />
          )}
          {activeModal === "delete" && (
            <DeleteConfirmationModal
              onClose={handleCloseModal}
              onCancel={handleCloseModal}
              onCardDelete={handleCardDelete}
            />
          )}
          {activeModal === "edit" && (
            <EditProfileModal
              isOpen={activeModal === "edit"}
              onClose={handleCloseModal}
              onSubmitClick={handleUpdateProfileSubmit}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
