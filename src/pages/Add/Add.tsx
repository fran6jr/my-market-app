import
React,
{ useState, useEffect }
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

  //useeffect to console log product when it changes
  useEffect(() => {
    console.log(product)
  }, [product])
  

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setProduct(product => ({
      ...product,
      [name]: value
    }))
  }

  //renders the correct input fields based on the product type
  //TODO: make this dynamic and avoid the use of conditional statements at all cost
  const renderInputFields = () => {
    const { weight, size, dimensions } = product;

    // onchange, let it use the handleChange function
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
            id='#cancel-btn'
            className="cancel_button"
          >
            CANCEL
          </button>
        </div>
      </div>
      <div className="form_container">
        <form id="#product_form">
          <label>
            SKU
            <input
              id="#sku"
              name="sku"
              placeholder="#sku"
              value={product.sku}
              onChange={handleChange}
            />
          </label>
          <label>
            Name
            <input
              id="#name"
              name="name"
              placeholder="#name"
              value={product.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Price ($)
            <input
              id="#price"
              name="price"
              placeholder="#price"
              value={product.price===0 ? '': product.price}
              onChange={handleChange}
            />
          </label>
          <label className="select_label">
            Type switcher
            <select
              id="#productType"
              onChange={renderInputFields}  //renders the correct input fields
            >
              <option
                value="dvd"
              >
                DVD
              </option>
              <option
                value="furniture"
              >
                Furniture
              </option>
              <option
                value="book"
              >
                Book
              </option>
            </select>
          </label>

        </form>
      </div>
    </div>
  )
}

export default Add