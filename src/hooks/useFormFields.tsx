import { ProductForm } from "./interface";

const useFormFields = (): ProductForm[] => {
    const p: ProductForm[] = [
        {
            type: "dvd",
            name: 'size"',
            description: "Please, provide size",
            fields: [
                {
                    label: 'Size (MB)',
                    name: 'size',
                    inputId: 'size',
                }
            ],
        },
        {
            type: "furniture",
            name: 'dimensions',
            description: "Please, provide dimensions",
            fields: [
                {
                    label: 'Height (CM)',
                    name: 'height',
                    inputId: 'height',
                },
                {
                    label: 'Width (CM)',
                    name: 'width',
                    inputId: 'width',
                },
                {
                    label: 'Length (CM)',
                    name: 'length',
                    inputId: 'length',
                },
            ],
        },
        {
            type: "book",
            name: 'weight',
            description: "Please, provide weight",
            fields: [
                {
                    label: 'Weight (KG)',
                    name: 'weight',
                    inputId: 'weight',
                }
            ],
        }
    ]

    return p;
}

export default useFormFields;