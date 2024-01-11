const baseUrl = "http://localhost:3001";

const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

const getItemList = () => {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  }).then(handleServerResponse);
};

const addItem = ({ name, weather, imageUrl }) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      weather,
      imageUrl,
    }),
  }).then(handleServerResponse);
};

const removeItem = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  }).then(handleServerResponse);
};

const api = {
  getItemList,
  addItem,
  removeItem,
};

export default api;
