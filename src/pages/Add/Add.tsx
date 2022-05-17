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
      price: undefined,
      weight: undefined,
      size: undefined,
      dimensions: undefined
    })

  const [productType, setProductType] = useState<string>('')

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
    const { name, value } = event.target;
    setProduct(product => ({
      ...product,
      [name]: value
    }))
  }

  const handleProductType = (event: any) => {
    const { value } = event.target;
    setProductType(value)
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
              type="text"
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
              type="text"
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
              type="number"
              placeholder="#price"
              value={product.price}
              onChange={handleChange}
            />
          </label>
          <label className="select_label">
            Type switcher
            <select
              name="productType"
              id="#productType"
              value={productType}
              onChange={handleProductType}
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

          {productType === "dvd" &&
            <div id="#DVD">
              <p>
                This select option should have an id: #DVD
              </p>
              <label>
                Size (MB)
                <input
                  id="#size"
                  name="size"
                  type="number"
                  placeholder="#size"
                  value={product.size}
                  onChange={handleChange}
                />
              </label>
            </div>
          }

          {productType === "furniture" &&
            <div id="#Furniture">
              <p>
                This select option should have an id: #Furniture
              </p>
              <label>
                Height (CM)
                <input
                  id="#height"
                  name="height"
                  type="number"
                  placeholder="#height"
                  value={product.dimensions?.height}
                  onChange={handleChange}
                />
              </label>
              <label>
                Width (CM)
                <input
                  id="#width"
                  name="width"
                  type="number"
                  placeholder="#width"
                  value={product.dimensions?.width}
                  onChange={handleChange}
                />
              </label>
              <label>
                Length (cm)
                <input
                  id="#length"
                  name="length"
                  type="number"
                  placeholder="#length"
                  value={product.dimensions?.length}
                  onChange={handleChange}
                />
              </label>
            </div>
          }

          {productType === "book" &&
            <div id="#Book">
              <p>
                This select option should have an id: #Book
              </p>
              <label>
                Weight (CM)
                <input
                  id="#weight"
                  name="weight"
                  type="number"
                  placeholder="#weight"
                  value={product.weight}
                  onChange={handleChange}
                />
              </label>
            </div>
          }

        </form>
      </div>
    </div>
  )
}

export default Add