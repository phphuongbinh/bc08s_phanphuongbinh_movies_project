export const userLocalStorage = {
  get: () => {
    const data = localStorage.getItem("USER");
    return JSON.parse(data);
  },
  set: (user) => {
    const dataJson = JSON.stringify(user);
    localStorage.setItem("USER", dataJson);
  },
  remove: () => {
    localStorage.removeItem("USER");
  },
};
