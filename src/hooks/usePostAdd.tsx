import { useState, useEffect } from "react"
import { Product } from "./types"


const usePostAdd = () => {

  const postAdd = async (product: Product) => {
    console.log("here 1");
    const response = await fetch('https://86e2-34-125-149-235.ngrok.io/index.php/product/add', {
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
      return data.message;
    }

    return "";
  }

  return postAdd;
  
}


export default usePostAdd;
