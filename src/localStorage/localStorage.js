function saveToLocalStorage(state) {
  const cart = state.cart;
  const token = state.login.token;
  const user = state.login.user;
  const data = state.changeInfo.data;
  const changeInfo = {data};
  const login = {
      token,
      user
  }
  const saveState = {
    cart,
    login,
    changeInfo
  }
  try {
    const serializedState = JSON.stringify(saveState)
    localStorage.setItem('state', serializedState)
  } catch (error) {
    console.log(error)
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (error) {
    console.log(error)
    return undefined
  }
}

const persistedState = loadFromLocalStorage()

export {
  persistedState,
  saveToLocalStorage
}