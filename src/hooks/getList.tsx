import { useState, useEffect } from "react"
import { Lists, Product } from "./types"

const getList = (): Lists => {
  // const product: Product = {
  //   sku: 'JVC20013',
  //   name: 'Achme Disc',
  //   price: 100,
  //   width: 24,
  //   height: 56,
  //   length: 70
  // }

  // let productss: Product[] = new Array(12).fill(product)
  // productss = productss.map((p, index) => ({
  //   ...p,
  //   sku: `${p.sku}-${index}`
  // }))

  // const [products] = useState(productss);
  // let error = "sdft";




  // const [products, setProducts] = useState<Product[]>([]);
  // const [error, setError] = useState<string>('');

  // useEffect(() => {
  //   fetch(`https://b712-34-125-149-235.ngrok.io/index.php/product/list`)
  //     .then((release) => release.json())
  //     .then(setProducts)
  //     .catch(setError);
  // }, []);

  // console.log({ products });

  return {
    products: products,
    error: /*error*/JSON.stringify(error, null, 2)
  };

  // return productsState
}

export default getList;
