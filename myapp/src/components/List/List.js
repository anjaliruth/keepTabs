import React, { useEffect, useState } from "react";

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

  return (
    <>
      {products.map((product, index) => (
        <h2 key={index}>{product.location}</h2>
      ))}
    </>
  );
}
