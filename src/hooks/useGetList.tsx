import { useState, useEffect } from "react"
import { baseUrl } from "./baseUrl";
import { Lists, Product } from "./types"

const useGetList = (): Product[] => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetch(baseUrl +"/list",
    { method: 'GET',} )
      .then(response => response.json())
      .then(setProducts)
      .catch(setError);
  }, []);

  if (error) {
    throw new Error(error);
  }

  console.log({ products });

  return products;
  //   error: JSON.stringify(error, null, 2)
  // };

}

export default useGetList;
