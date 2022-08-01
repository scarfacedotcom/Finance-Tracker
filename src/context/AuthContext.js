import { createContext, useReducer } from "react";

export const AuthContext = createContext()

const [state, dispatch] = useReducer(authReducer, {
  user: null
})

export const AuthContextProvider = ({ children }) => {
  return (
    <AuthContext.Provider>
      { children }
    </AuthContext.Provider>
  )
}