var LocalStorage = () => {
  let api = {}

  api.setUserLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  }
  api.getUserLocalStorageValue = (key) => {
    return JSON.parse(localStorage.getItem(key))
  }
  return api
}

export default LocalStorage
