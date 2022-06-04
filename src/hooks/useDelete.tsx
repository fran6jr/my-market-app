import { baseUrl } from "./baseUrl";

export const useDelete = () => {

  const deleteProducts = async (skus: string[]) => {
    const response = await fetch(baseUrl + '/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(skus)
    });

    const data = await response.json();

    if (response.status !== 200) {
      return data.message;
    }

  }

  return deleteProducts;

  }