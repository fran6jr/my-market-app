import { ProductType } from "./types";

export interface ProductForm {
    type?: ProductType
    name: string
    label: string
    inputId: string
    inputType: string
    errorMessage?: string
}
