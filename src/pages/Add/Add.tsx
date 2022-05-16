import React from "react"
import './styles.scss'

const Add = () => {
  return (
    <div className="addproduct">
      <div className="header">
        <h1>Product Add</h1>
        <div>
          <button>SAVE</button>
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
            <input id="sku"/>
          </label>
          <label>
            Name
            <input id="name"/>
          </label>
          <label>
            Price ($)
            <input id="price"/>
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