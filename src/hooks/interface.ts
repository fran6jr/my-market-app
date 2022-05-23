import { ProductType } from "./types";

export interface ProductForm {
    type: ProductType
    name: string
    description: string
    fields: {
        label: string
        name: string
        inputId: string
    }[]
}
