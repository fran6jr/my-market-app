export type Product = {
  sku: string
  name: string
  price: number
  weight?: number
  size?: number
  dimensions?: {
    width: number,
    height: number,
    length: number
  }
}