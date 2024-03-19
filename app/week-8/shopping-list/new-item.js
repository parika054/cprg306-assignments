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
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
          className="flex-1 mt-8 p-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          style={{ boxShadow: '0 4px 6px rgba(32, 33, 36, 0.28)' }} // Box shadow effect
        />
        
        <div className="flex space-x-2">
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full p-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            style={{ boxShadow: '0 4px 6px rgba(32, 33, 36, 0.28)' }} // Box shadow effect
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            style={{ boxShadow: '0 4px 6px rgba(32, 33, 36, 0.28)' }} // Box shadow effect
          >
            {/* ...options remain unchanged */}
          </select>
        </div>
        
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          style={{ boxShadow: '0 4px 6px rgba(32, 33, 36, 0.28)' }} // Box shadow effect
        >
          Add
        </button>
      </form>
    </div>
  );
}
