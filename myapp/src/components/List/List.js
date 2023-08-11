import React, { useEffect, useState } from "react";
import Form from "../Form/Form.js"

export default function List() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const url = "http://localhost:5001/items";

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setProducts(data);
    } catch (error) {
        console.error("Error:", error.message);
    }
}
console.log("products:", products)
useEffect(() => {
    fetchProducts();
}, []);


async function addProduct(product) {
  const url = "http://localhost:5001/items";
  try{
    const response = await fetch(url, {
      // The method property of the options object being passed to fetch is set to 'POST'. This indicates that a POST request is being sent.
      method: "POST",

      // The headers property of the options object is used to specify HTTP headers that will be included with the request. In this case, a Content-Type header is being set.
      headers: {
        // The Content-Type header is set to 'application/json', indicating that the body of the request will contain JSON data.
        "Content-Type": "application/json",
      },

      // The body property of the options object is used to specify the body of the request. In this case, the 'product' parameter of the function is being stringified into JSON and used as the body.
      body: JSON.stringify(product),
    })
    fetchProducts()
  }
catch (err){
  console.error("Error:", err.message)
}
}

  return (
    <>
      {products.map((product, index) => (
        <h2 key={index}>{product.location}</h2>
      ))}
      <Form addProduct={addProduct}/>
    </>
  );
}
