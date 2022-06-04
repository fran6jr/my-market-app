import { baseUrl } from "./baseUrl";
import { Product } from "./types"

const usePostAdd = () => {

  const postAdd = async (product: Product) => {
    console.log("here 1");
    const response = await fetch(baseUrl + '/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });

    console.log("here 2");
    const data = await response.json();
    console.log("after here");

    if (response.status !== 200) {
      console.log("here 3");
      console.log(data.message);
      return JSON.stringify(data.message);
    }

    return null;
  }

  return postAdd;
  
}


export default usePostAdd;
