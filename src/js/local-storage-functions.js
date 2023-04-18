const setToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.log(err);
  }
};

const getFromLocalStorage = key => {
  try {
    const savedFilms = localStorage.getItem(key);
    return savedFilms === null ? undefined : JSON.parse(savedFilms);
  } catch (err) {
    console.log(err);
  }
};

export { setToLocalStorage, getFromLocalStorage };
