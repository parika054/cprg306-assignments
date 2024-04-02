
import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li 
      className="mb-4 p-4 shadow-lg rounded-lg cursor-pointer transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl" 
      onClick={onSelect}
      style={{ backgroundColor: '#cffafe' }} // Light blue background color
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold text-lg text-blue-900">{name}</p>
          <p className="text-sm text-gray-700">Quantity: {quantity}</p>
        </div>
        <span className="text-sm text-gray-600 bg-blue-200 p-1 rounded">{category}</span>
      </div>
    </li>
  );
};

export default Item;



