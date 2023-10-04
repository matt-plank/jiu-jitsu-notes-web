const tokenStorage = {
  get: () => {
    return localStorage.getItem("token");
  },
  exists: () => {
    const token = localStorage.getItem("token");

    if (token === null || token === "") return false;

    return true;
  },
  delete: () => {
    localStorage.removeItem("token");
  },
};

export default tokenStorage;
