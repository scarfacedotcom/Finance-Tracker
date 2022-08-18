import { useState, useEffect } from "react";
import { projectFireStore  } from "../firebase/config";

export const useCollection = (collection) => {

  const [ documents, setDocuments] = useState(null)
  const [ error, setError] = useState(null)

  useEffect(() => {
    let ref = projectFireStore.collection(collection)

    const unsub = ref.onSnapshot((snapshot) => {
      let results = []

      snapshot.docs.forEach(doc => {
        results.push({...doc, id:doc.id})
      })

    setDocuments(results)
    setError(null)

    }, (error) => {
      console.log(error)
      setError('could not fetch the data')
    })

    return () => unsub()

  }, [collection])

  return {documents, error}

}