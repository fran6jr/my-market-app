import { useState, useEffect } from "react"
import { Product } from "./types"


const usePostAdd = (product?: Product): string => {
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetch("https://99d4-34-125-149-235.ngrok.io/index.php/product/add",
    { method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(response => response.json())
      .then(setError)
      .catch(e => {
        setError(e.message);
        console.log(e.message);
      });
  }, [product]);

  return JSON.stringify(error, null, 2);
  
}

export default usePostAdd;
