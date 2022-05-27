import
React,
{
  useState,
  useEffect
} from "react"
import './styles.scss'
import {
  Product,
  ProductType
} from "hooks/types";
import useFormFields from "hooks/useFormFields";
import useSelect from "hooks/useSelect";
import { useNavigate } from "react-router-dom";



const Add = () => {

  const [product, setProduct] = useState<Product>(
    {
      sku: '',
      name: '',
    })

  const [showError, setShowError] = useState<boolean>(false);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const p = useFormFields();

  const [productType, setProductType] = useState<ProductType>()

  const navigate = useNavigate();

  useEffect(() => {
    setProduct({
      sku: product.sku,
      name: product.name,
      price: product.price
    })
  }, [productType]);


  const handleProductType = (event: any) => {
    const { value } = event.target;
    setProductType(value)
    setShowError(false);
  }

  useEffect(() => {
    console.log({ product });
  }, [product]);




  const handleSubmit = (event: any) => {
    event.preventDefault();

    const checkFields = p.filter(p => !p.type || p.type === productType).map(p => p.name);

    if (checkFields.some(key => validate(key))) {
      setShowError(true);
      return;
    }

    console.log(product);

    setIsSubmitting(true);

    const addToDatabase = (product: Product) => {
      // add to database
    }
  }


  const handleChange = (event: any) => {
    const { name, value, type } = event.target;

    setShowError(false);

    console.log({ type });

    setProduct(product => ({
      ...product,
      [name]: type === "number" ? parseFloat(value) : value
    }))

    setIsSubmitting(false)
  }

  const handleCancel = (event: any) => {

    event.preventDefault();

    navigate("/");

  }


  const validate = (field: string): string | undefined => {
    const value: string = product[field];

    if (!value)
      return "Please, submit required data";

    const inputType = p.find(s => s.name === field)?.inputType;

    // if (inputType === "number")
    //   return !isNaN(parseInt(value));

    if ((inputType === "text") && (/[^0-9a-zA-Z]/.test(value)))
      return "Please, provide the data of indicated type";

  }

  const selectFields = useSelect();
  const [attributes, setAttributes] = useState<string>("");

  const requiredFields = p.filter(p => !p.type)
  const optionalFields = p.filter(p => p.type === productType)

  useEffect(() => {
    const sAttributes = p.find(attr => attr.type === productType)?.specialAttributes;
    if (sAttributes)
      setAttributes(sAttributes);
  }, [productType]);


  return (
    <div className="addproduct">
      <div className="header">
        <h1>Product Add</h1>
        <div>
          <button
            type="submit"
            form="product_form"
          >
            SAVE
          </button>
          <button
            id='#cancel-btn'
            className="cancel_button"
            onClick={handleCancel}
          >
            CANCEL
          </button>
        </div>
      </div>
      <div className="form_container">
        <form id="product_form"
          onSubmit={handleSubmit}>
          {requiredFields?.map(field => {
            const error = validate(field.name);
            return (
              <label key={field.inputId}>
                {field.label}
                <div>
                  <input
                    id={field.inputId}
                    name={field.name}
                    type={field.inputType}
                    step={field.step}
                    value={product[field.name]}
                    onChange={handleChange}
                  //required
                  />
                  {showError && error
                    && <p className="error">{error}</p>}
                </div>
              </label>
            )
          })}

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
          {productType && optionalFields &&
            <div
              className="product_form" >
              {optionalFields?.map(field => {
                const error = validate(field.name);
                return (
                  <label key={field.inputId}>
                    {field.label}
                    <div>
                      <input
                        id={field.inputId}
                        name={field.name}
                        type={field.inputType}
                        step={field.step}
                        value={product[field.name]}
                        onChange={handleChange}
                      //required
                      />
                      {showError && error
                        && <p className="error">{error}</p>}
                    </div>
                  </label>
                )
              })}
              {attributes &&
                <p>{attributes}</p>}
            </div>
          }

        </form>
      </div>
        <h5 className="footer">Scandiweb Test assignment</h5>
    </div >
  )
}

export default Add