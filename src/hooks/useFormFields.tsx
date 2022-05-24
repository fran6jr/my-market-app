import { ProductForm } from "./interface";

const useFormFields = (): ProductForm[] => {
  const p: ProductForm[] = [
    {
      type: "dvd",
      name: 'size',
      label: 'Size (MB)',
      inputId: 'size',
      inputType: 'number',
      step: "0.01",
      specialAttributes: "Please, provide size",
    },
    {
      type: "furniture",
      name: 'height',
      label: 'Height (CM)',
      inputId: 'height',
      inputType: 'number',
      step: "0.01",
      specialAttributes: "Please, provide dimensions in HxWxL format",
    }, 
    {
      type: "furniture",
      name: 'width',
      label: 'Width (CM)',
      inputId: 'width',
      inputType: 'number',
      step: "0.01",
      specialAttributes: "Please, provide dimensions in HxWxL format",
    },
    {
      type: "furniture",
      name: 'length',
      label: 'Length (CM)',
      inputId: 'length',
      inputType: 'number',
      step: "0.01",
      specialAttributes: "Please, provide dimensions in HxWxL format",
    },
    {
      type: "book",
      name: 'weight',
      label: 'Weight (KG)',
      inputId: 'weight',
      inputType: 'number',
      step: "0.01",
      specialAttributes: "Please, provide weight",
    },
    {
      name: "sku",
      label: "SKU",
      inputId: "sku",
      inputType: 'text',
    },
    {
      name: "name",
      label: "Name",
      inputId: "name",
      inputType: 'text',
    },
    {
      name: "price",
      label: "Price ($)",
      inputId: "price",
      inputType: 'number',
      step: "0.01",
    }
  ]

  return p;
}

export default useFormFields;