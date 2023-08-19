import React, { useState, useEffect } from "react";
export default function Form({ submitProduct, editProduct }) {
  const [date, setDate] = useState(new Date());
  const [item, setItem] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (editProduct) {
      setDate(editProduct.date);
      setItem(editProduct.item);
      setLocation(editProduct.location);
    }
  }, [editProduct]);

  console.log(date);
  console.log(editProduct)
  function handleSubmit(e) {
    e.preventDefault();
    const product = {
      date,
      item,
      location,
    };
    submitProduct(product);

    setDate(new Date());
    setItem("");
    setLocation("");
  }
  return (
    <div >
      <form onSubmit={handleSubmit} className="form" >
      <h2> Add Items</h2>
        <label>Date:</label>
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

          <label>Item:</label>
          <input value={item} onChange={(e) => setItem(e.target.value)} />
   
 
          <label>Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
   
        <div className="submitButton">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
