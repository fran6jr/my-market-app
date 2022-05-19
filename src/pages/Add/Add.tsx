import
React,
{ useState, useEffect }
  from "react"
import './styles.scss'
import { Product, ProductType } from "hooks/types";

interface ProductForm {
  type: ProductType
  name: string
  description: string
  fields: {
    label: string
    name: string
    inputId: string
  }[]
}

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





const Add = () => {

  const [product, setProduct] = useState<Product>(
    {
      sku: '',
      name: '',
      price: undefined,
      weight: undefined,
      size: undefined,
      dimensions: undefined
    })

  const [productType, setProductType] = useState<ProductType>()

  const handleSubmit = (event: any) => {
    event.preventDefault();

    // use php to add product to database
    const addToDatabase = () => {
      // add to database
    }
  }



  useEffect(() => {
    console.log(product)
  }, [product])

  const handleChange = (event: any, field = '') => {
    const { name, value } = event.target;
    if (field === "dimensions") {
      setProduct(product => ({
        ...product,
        dimensions: {
          ...(product.dimensions || {}),
          [name]: value
        }
      } as any))
      return
    }
    setProduct(product => ({
      ...product,
      [field || name]: value
    }))
  }

  const handleProductType = (event: any) => {
    const { value } = event.target;
    setProductType(value)
  }

  const getValue = (field: string, name: string) => {

    if (field === "dimensions") {
      return product.dimensions ? product.dimensions[name] : ''
    }
    return product[field || name]
  }

  const formFields = p.find(p => p.type === productType)

  return (
    <div className="addproduct">
      <div className="header">
        <h1>Product Add</h1>
        <div>
          <button
            type="submit"
            form="add-product-form"
            onClick={handleSubmit}
          >
            SAVE
          </button>
          <button
            id='#cancel-btn'
            className="cancel_button"
          >
            CANCEL
          </button>
        </div>
      </div>
      <div className="form_container">
        <form id="product_form">
          <label>
            SKU
            <input
              id="sku"
              name="sku"
              type="text"
              placeholder="sku"
              value={product.sku}
              onChange={handleChange}
            />
          </label>
          <label>
            Name
            <input
              id="name"
              name="name"
              type="text"
              placeholder="name"
              value={product.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Price ($)
            <input
              id="price"
              name="price"
              type="number"
              placeholder="price"
              value={product.price}
              onChange={handleChange}
            />
          </label>
          <label className="select_label">
            Type switcher
            <select
              name="productType"
              id="productType"
              value={productType}
              onChange={handleProductType}
            >
              <option
                value="typeswitcher"
              >
                Type Switcher
              </option>
              <option
                id="DVD"
                value="dvd"
              >
                DVD
              </option>
              <option
                id="Furniture"
                value="furniture"
              >
                Furniture
              </option>
              <option
                id="Book"
                value="book"
              >
                Book
              </option>
            </select>
          </label>
          {formFields &&
            <div
              className="product_form" >
              {formFields?.fields.map(field => (
                <label key={field.inputId}>
                  {field.label}
                  <input
                    id={field.inputId}
                    name={field.name}
                    type="number"
                    value={getValue(field.name, field.inputId)}
                    onChange={e => handleChange(e, formFields.name)}
                  />
                </label>
              ))}
              <p>
                {formFields.description}
              </p>
            </div>
          }
        </form>
      </div>
      <p>
        "NOTE: When Weight is active, all aspects of dimension should be null, same as with DVD"
        </p><p># All fields are mandatory for submission, missing values should trigger notification “Please, submit required data”
        </p><p># Implement input field value validation, invalid data must trigger notification “Please, provide the data of indicated type”
        </p><p># Notification messages should appear on the same page without reloading
        </p><p># The page must have a “Save” button to save the product. Once saved, return to the “Product List” page with the new product added.
        </p><p># The page must have a “Cancel” button to cancel adding the product action. Once canceled, returned to the “Product List” page with no new products added.
        </p><p># No additional dialogues like “Are you sure you want to Save / Cancel?”
      </p>

    </div>
  )
}

export default Add