import { createContext, useReducer } from "react";

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    
    default:
      return state
  }
}

const [state, dispatch] = useReducer(authReducer, {
  user: null
})

dispatch({ type: 'LOG_IN' })

export const AuthContextProvider = ({ children }) => {
  return (
    <AuthContext.Provider value = {{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )
}