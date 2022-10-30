const {
  LOAD_USER,
  SUCC_USER,
  FAIL_USER,
  LOGOUT_USER,
  CURRENT_USER,
} = require('../ActionTypes/user')

//initial state
const initialState = {
  user: null,
  loadUser: false,
  errors: [],
  isAuth: false,
}

//pure function
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, loadUser: true }
    case SUCC_USER:
      localStorage.setItem('token', payload.token)
      return { ...state, load: false, user: payload.data, isAuth: true }
    case FAIL_USER:
      return { ...state, loadUser: false, errors: payload }
    case LOGOUT_USER:
        localStorage.removeItem("token")
      return { user: null, loadUser: false, errors: [], isAuth: false }
      case CURRENT_USER:
        return { ...state, user: payload, loadUser:false, isAuth: true}

    default:
      return state
  }
}

export default userReducer
