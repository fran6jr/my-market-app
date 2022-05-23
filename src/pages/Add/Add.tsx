import
React,
{
  useState,
  useEffect
} from "react"
import './styles.scss'
import { Product, ProductType } from "hooks/types";
import useFormFields from "hooks/useFormFields";
import useRequiredFormFields from "hooks/useRequiredFormFields";
import useSelect from "hooks/useSelect";


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


  const p = useFormFields();
  const r = useRequiredFormFields();
  const selectFields = useSelect();

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
          {r.map(s => (
            <label key={s.inputID}>
              {s.label}
              <input
                id={s.inputID}
                name={s.name}
                type={s.type}
                placeholder={s.placeholder}
                value={product[s.name]}
                onChange={handleChange}
              />
              {product[s.name] && <span>Please, submit required data</span>}
              {}
            </label>
          ))}

          <label className="select_label">
            Type switcher
            <select
              name="productType"
              id="productType"
              value={productType}
              onChange={handleProductType}
              required
            >
              {selectFields.map(selectField => (
                <option key={selectField.inputId}
                value={selectField.value}
                >
                {selectField.text}
              </option>
              ))}
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
        <p>
          NOTE: When a product type is selected, all aspects of other types should reset and be unaccessible."
        </p><p># All fields are mandatory for submission, missing values should trigger notification “Please, submit required data”
        </p><p># Implement input field value validation, invalid data must trigger notification “Please, provide the data of indicated type”
        </p><p># Notification messages should appear on the same page without reloading
        </p><p># The page must have a “Save” button to save the product. Once saved, return to the “Product List” page with the new product added.
        </p><p># The page must have a “Cancel” button to cancel adding the product action. Once canceled, returned to the “Product List” page with no new products added.
        </p><p># No additional dialogues like “Are you sure you want to Save / Cancel?”
        </p>
      </p>

    </div >
  )
}

export default Add