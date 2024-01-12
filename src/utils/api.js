const baseUrl = "http://localhost:3001";

export const processServerResponse = (res) => {
  console.log(res);
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

const getItemList = () => {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  }).then(processServerResponse);
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
  }).then(processServerResponse);
};

const removeItem = (_id) => {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  }).then(processServerResponse);
};

const api = {
  getItemList,
  addItem,
  removeItem,
};

export default api;
