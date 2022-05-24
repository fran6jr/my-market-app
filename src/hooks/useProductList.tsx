import { useState } from "react"
import { Product } from "./types"

const useProductList = (): Product[] => {
  const product: Product = {
    sku: 'JVC20013',
    name: 'Achme Disc',
    price: 100,
    width: 24,
    height: 56,
    length: 70
  }

  let products: Product[] = new Array(12).fill(product)
  products = products.map((p, index) => ({
    ...p,
    sku: `${p.sku}-${index}`
  }))

  const [productsState] = useState(products)

  return productsState
}

export default useProductList
