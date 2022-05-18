export type Product = {
  sku: string
  name: string
  price?: number
  weight?: number
  size?: number
  dimensions?: Dimension
}

export type Dimension = {
    width: number
    height: number
    length: number
}