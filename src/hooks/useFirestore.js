import { useReducer, useState, useEffect } from "react";
import { projectFireStore } from "../firebase/config";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return {...state, isPending: true}

    default:
      return state
  }
}

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const [ isCancelled, setIsCancelled ] = useState(false)

  //colletion ref
  const ref = projectFireStore.collection(collection)

  // only dispatch if not cancelled

  const dispatchIsNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action)
    }
  }

  //add a document
  const addDocument = async (doc) => {
    dispatch({type: 'IS_PENDING'})

    try {
      const addedDocument = await ref.add(doc)

      dispatchIsNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument})
    }
    catch(err) {

    }
  }

  //delete a document
  const deleteDocument = async (id) => {

  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return {addDocument, deleteDocument, response}
}