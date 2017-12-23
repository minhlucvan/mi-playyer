
const LOG_IN_REQUESTED = 'LOG_IN_REQUESTED';
const LOG_IN = 'LOG_IN';

const LOG_OUT_REQUESTED = 'LOG_OUT_REQUESTED';
const LOG_OUT = 'LOG_OUT';


const initialState = {
    user: null,
    loggingIn: false,
    logginOut: false,
    isLoggedIn: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUESTED:
      return {
        ...state,
        loggingIn: true
      }

    case LOG_IN:
      return {
        ...state,
        user: action.payload,
        loggingIn: false
      }

    case LOG_OUT_REQUESTED:
      return {
        ...state,
        logginOut: true
      }

    case LOG_OUT:
      return {
        ...state,   
        user: null,
        loggingIn: false,
        logginOut: false,
        isLoggedIn: false
      }

    default:
      return state
  }
}

export const login = () => {
  return dispatch => {
    dispatch({
      type: LOG_IN_REQUESTED
    })

    dispatch({
      type: LOG_IN
    })
  }
}


export const logout = () => {
  return dispatch => {
    dispatch({
      type: LOG_OUT_REQUESTED
    })

    dispatch({
      type: LOG_OUT
    })
  }
}