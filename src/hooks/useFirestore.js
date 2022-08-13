import { useReducer, useState, useEffect } from "react";
import { projectFireStore, timestamp } from "../firebase/config";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return {isPending: true, document: null, success:false, error:null}
    case 'ADDED_DOCUMENT':
      return {isPending: false, document:  action.payload, success:true, error:null}
    case 'ERROR':
      return {isPending: false, document: null, success:false, error: action.payload}
    default:
      return state
  }
}

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const [ isCancelled, setIsCancelled ] = useState(false)

  //collection ref
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
      const createdAt = timestamp.fromDate(newDate())
      const addedDocument = await ref.add({...doc, createdAt})

      dispatchIsNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument})
    }
    catch(err) {
      dispatchIsNotCancelled({ type: 'ERROR', payload: err.message})
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