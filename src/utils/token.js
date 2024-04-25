const tokenKey = "jwt";

export const getToken = () => {
  return localStorage.getItem(tokenKey);
};

export const handleToken = (token) => {
  if (token) {
    localStorage.setItem(tokenKey, token);
    return token;
  } else {
    return;
  }
};

export const removeToken = () => {
  localStorage.removeItem(tokenKey);
};
