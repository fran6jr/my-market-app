export type Product = {
  sku: string
  name: string
  price?: number
  weight?: number
  size?: number
  dimensions?: Dimension
  [key: string]: any
}

export type Dimension = {
    width: number
    height: number
    length: number
    [key: string]: any
}

export type ProductType = "dvd" | "book" | "furniture"