export const getToken = () => {
  const token = sessionStorage.getItem("access_token");
  if (token) return JSON.parse(token);
  else return null;
};
export const setToken = (token) => {
  sessionStorage.setItem("access_token", JSON.stringify(token));
};
export const getUserInfo = () => {
  const token = sessionStorage.getItem("userInfo");
  if (token) return JSON.parse(token);
  else return null;
};
export const setUserInfo = (token) => {
  sessionStorage.setItem("userInfo", JSON.stringify(token));
};
export const getSessionStorageSelectedCategory = () => {
  const token = sessionStorage.getItem("selectedCategory");
  if (token) return JSON.parse(token);
  else return null;
};
export const setSessionStorageSelectedCategory = (token) => {
  sessionStorage.setItem("selectedCategory", JSON.stringify(token));
};
