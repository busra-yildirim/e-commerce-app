export const getToken = () => {
  const token = sessionStorage.getItem("access_token");
  if (token) return JSON.parse(token);
  else return null;
};
export const setToken = (token) => {
  sessionStorage.setItem("access_token", JSON.stringify(token));
};
