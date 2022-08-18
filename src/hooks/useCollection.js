import { useState, useEffect } from "react";
import { projectFireStore  } from "../firebase/config";

export const useCollection = (collection) => {

  const [ documents, setDocuments] = useState(null)
  const [ error, setError] = useState(null)

  useEffect(() => {
    let ref = projectFireStore.collection(collection)
    
  }, [collection])

}