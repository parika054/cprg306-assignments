"use client";
import React, { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('Produce');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) return;

    onAddItem({
      name,
      quantity,
      category,
      id: String(Date.now())
    });

    setName('');
    setQuantity(1);
    setCategory('Produce');
  };

  return (
    <div className="mb-8">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <label className="block font-semibold text-blue-800">
         <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
          className="flex-1 mt-8 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </label>
        
        <label className="block font-semibold text-blue-800">
        <div className="flex space-x-2">
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-1/2 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          </div>
            </label>

            <label className="block font-semibold text-blue-800">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-1/2 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
            
          </select>
        
        </label>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Add
        </button>
      </form>
    </div>
  );
}
