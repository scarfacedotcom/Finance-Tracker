import { useState } from "react";
import { projectAuth } from "../firebase/config";

export const useSignup = () => {

  const [ error, setError ] = useState(null)
  const [ isPending, setIsPending ] = useState(false)

  const signup = async (email, password, displayName) => {
    console.log(err.message)
    setError(err.message)
    setIsPending(true)

    try {
      //sign up user
      const res = await projectAuth.createUserWithEmailAndPassword(email,password)
      console.log(res.user)

      if(!res) {
        throw new Error ('could not complete signup')
      }
      // add display Name to user
      await res.user.updateProfile({ displayName })

      setIsPending(false)
      setError(null)

    }
    catch (err){
      setError(err.message)
      setIsPending(false)
    }

  }
  return( error, isPending, signup)

}