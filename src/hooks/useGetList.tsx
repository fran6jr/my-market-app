import { useState, useEffect } from "react"
import { Lists, Product } from "./types"

const useGetList = (): Lists => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetch("https://408f-34-125-149-235.ngrok.io/index.php/product/list",
    { method: 'GET',} )
      .then(response => response.json())
      .then(setProducts)
      .catch(e => {
        setError(e.message);
        console.log(e.message);
      });
  }, []);

  console.log({ products });

  return {
    products: products,
    error: JSON.stringify(error, null, 2)
  };

}

export default useGetList;
