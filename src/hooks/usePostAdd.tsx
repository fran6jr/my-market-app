import { useState } from "react";
import { baseUrl } from "./baseUrl";
import { Product } from "./types"


const usePostAdd = () => {
  const [error, setError] = useState<string>('');

  const postAdd = async (product: Product) => {

    try {
      const response = await fetch(baseUrl + "/add",
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(product)
        }
      );
      if (!response.ok) {
        setError("Product could not be added, please try again or check if product exists");
      }
    }
    catch (e) {
      console.log(e);
    }

    return error;

  }

  return postAdd;

}

export default usePostAdd;
