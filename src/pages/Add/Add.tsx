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



const Add = () => {

  const [product, setProduct] = useState<Product>(
    {
      sku: '',
      name: '',
    })

    const [error, setError] = useState<string>("");
  const p = useFormFields();

  const [productType, setProductType] = useState<ProductType>()

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
  }

 
useEffect(() => {
  console.log({error});
}, [error]);

  const useForm = (): any => {

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);


    const handleSubmit = (event: any) => {
      event.preventDefault();
      const { name, value } = event.target;

      if (error) {
        return;
      }

      console.log(product);

      setIsSubmitting(true);

      const addToDatabase = (product: Product) => {
        // add to database
      }
    }

    
    const handleChange = (event: any) => {
      const { name, value } = event.target;

      setProduct(product => ({
        ...product,
        [name]: value
      }))

      setIsSubmitting(false)
    }

    return {
      handleChange,
      handleSubmit,
      isSubmitting
    }
  };

  const { handleChange, handleSubmit, isSubmitting } = useForm();


  const validate = (field: string): boolean => {
    const value: string = product[field];

    if (!isSubmitting)    
      return true;

    if (!value) {
      setError("Please, submit required data");
      return false;
    }

    console.log(field, "1");

    const inputType = p.find(s => s.name === field)?.inputType;

    // if (inputType === "number")
    //   return !isNaN(parseInt(value));

    if ((inputType === "text") && (/[^0-9a-zA-Z]/.test(value)))
    {
        setError("Please, provide the data of indicated type");
        return false;
    }
    
    if ((inputType === "number") && (/[^0-9]/.test(value)))
    {
        setError("Please, provide the data of indicated type");
        return false;
    }
    
      setError("");

    return true;
  }

  const selectFields = useSelect();

  const requiredFields = p.filter(p => !p.type)
  const optionalFields = p.filter(p => p.type === productType)


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
          >
            CANCEL
          </button>
        </div>
      </div>
      <div className="form_container">
        <form id="product_form"
          onSubmit={handleSubmit}>
          {requiredFields?.map(field => (
            <label key={field.inputId}>
              {field.label}
              <input
                id={field.inputId}
                name={field.name}
                type={field.inputType}
                value={product[field.name]}
                onChange={handleChange}
              //required
              />
              {!validate(field.name)
                && <p className="error">{error}</p>}
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
          {productType && optionalFields &&
            <div
              className="product_form" >
              {optionalFields?.map(field => (
                <label key={field.inputId}>
                  {field.label}
                  <input
                    id={field.inputId}
                    name={field.name}
                    type={field.inputType}
                    value={product[field.name]}
                    onChange={handleChange}
                  //required
                  />
                  {!validate(field.name)
                    && <p className="error">{error}</p>}
                </label>
              ))}
              <p>
                dummy Text
              </p>
            </div>
          }

        </form>
      </div>
    </div >
  )
}

export default Add