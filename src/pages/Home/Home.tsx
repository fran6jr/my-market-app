import React, { useState } from "react"
import { Link } from "react-router-dom"
import './styles.scss'
import useProductList from "hooks/useProductList"

const Home = () => {

  const [selected, setSelected] = useState<string[]>([])
  const products = useProductList()

  const onSelect = (sku: string) => {
    const prev = [...selected]
    const index = selected.indexOf(sku)

    if (index === -1) {
      setSelected([...prev, sku])
    } else {
      const p = prev.slice(index, 1)
      setSelected([...p])
    }
  }

  const onMassDelete = () => {}

  return (
    <div className="home">
      <div className="header">
        <h1>Product List</h1>
        <div>
          <Link to='addproduct'>
            <button>ADD</button>
          </Link>
          <button
            id='delete-product-btn'
            className="delete_button"
            onClick={onMassDelete}
          >
            MASS DELETE
          </button>
        </div>
      </div>

      <div className="list_container">
        {products.map(product => {
          const { sku, name, price, size, weight, dimensions } = product

          return (
            <div
              key={sku}
              className="card"
            >
              <input
                type='checkbox'
                name='stuff'
                className="delete-checkbox"
                onChange={() => onSelect(sku)}
                checked={selected.includes(sku)}
              />
              <p>{sku}</p>
              <p>{name}</p>
              <p>{price}$</p>
              {size && <p>{size}MB</p>}
              {weight && <p>{weight}KG</p>}
              {dimensions && <p>Dimension: {`
                ${dimensions.height}x${dimensions.width}x${dimensions.length}`
              }</p>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home