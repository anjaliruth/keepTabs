import React, { useState } from "react";
export default function Form({addProduct}) {
  const [date, setDate] = useState(new Date());
  const [item, setItem] = useState("");
  const [location, setLocation] = useState("");

  console.log(date);
  function handleSubmit(e) {
e.preventDefault()
    const product = {
      date, 
      item, 
      location
    }
    addProduct(product)

    setDate(new Date())
    setItem("")
    setLocation("")
  }
  return (
    <>
      <h2> Add Items</h2>
      <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div>
          <label>Item:</label>
          <input value={item} onChange={(e) => setItem(e.target.value)} />
        </div>
        <div className="">
          <label>Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="submitButton">
            <input type="submit" />
        </div>
      </form>
    </>
  );
}
