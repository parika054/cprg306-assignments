"use client";

import { useState } from 'react';

export default function NewItem() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const item = ( name, quantity, category ) => {
    return name+" , Quantity"+quantity+", Category "+category;
  };
  //here, e represents the event
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Item added: " + item(name, quantity, category));
  };



  return (
    <form onSubmit={handleSubmit} className="p-2 m-4 bg-green-100 text-black max-w-sm w-full min-h-fit">
     <div className="mb-3">
        <input type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full mt-2 border-3 border-green-100 p-2 rounded-lg font-sans" required/>
      </div>
        <div className="flex justify-between">
            <input type="number" placeholder="Quantity" className="w-20 ml-2 border-3 border-green-100 p-2 rounded-lg font-sans" value={quantity} onChange={(e) => setQuantity(e.target.value)} />

            <select value={category} className="ml-2 border-3 border-green-700 p-2 rounded-lg font-sans" onChange={(e) => setCategory(e.target.value)}>
                <option value="" disabled>Category</option>
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen foods">Frozen Foods</option>
                <option value="canned goods">Canned Goods</option>
                <option value="dry goods">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>

            </select>
            </div>
            <button type="submit" className="w-full mt-4 py-2 px-4 bg-green-800 text-white font-semibold rounded-lg shadow-md hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-75">+</button>
    </form>
  );
}