import
React,
{ useState }
  from "react"
import './styles.scss'
import { Product } from "hooks/types";

const Add = () => {

  const [product, setProduct] = useState<Product>(
    {
      sku: '',
      name: '',
      price: 0,
      weight: undefined,
      size: undefined,
      dimensions: undefined
    })

  const handleSubmit = (event: any) => {
    event.preventDefault();

    // use sql to add product to database
    const addToDatabase = () => {
      // add to database
    }
  }

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setProduct(product => ({
      ...product,
      [name]: value
    }))
  }

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
            id='delete-product-btn'
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
              placeholder="#sku"
              value={product.sku}
              onChange={handleChange}
            />
          </label>
          <label>
            Name
            <input
              id="name"
              placeholder="#name"
            />
          </label>
          <label>
            Price ($)
            <input
              id="price"
              placeholder="#price"
            />
          </label>
          <label className="select_label">
            Type switcher
            <select>
              <option>DVD</option>
              <option>Furniture</option>
              <option>Book</option>
            </select>
          </label>

        </form>
      </div>
    </div>
  )
}

export default Add