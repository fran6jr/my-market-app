import { RequiredFormFields } from "./types";


const useRequiredFormFields = (): RequiredFormFields[] => {
    const r: RequiredFormFields[] = [
        {
            inputID: "sku",
            name: "sku",
            type: "type",
            placeholder: "sku",
            label: "SKU",
        },
        {
            inputID: "name",
            name: "name",
            type: "text",
            placeholder: "name",
            label: "Name",
        },
        {
            inputID: "price",
            name: "price",
            type: "number",
            placeholder: "price",
            label: "Price ($)",
        }
    ]

    return r;
}

export default useRequiredFormFields;
