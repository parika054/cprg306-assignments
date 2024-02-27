// /app/week-5/item.js
import React from 'react';

const Item = ({ name, quantity, category }) => {
    return (
        <li className="mb-4 p-4 shadow-lg rounded-lg">
            <div className="flex items-center justify-between">
                <div>
                    <p className="font-bold text-lg">{name}</p>
                    <p className="text-sm text-gray-700">Quantity: {quantity}</p>
                </div>
                <span className="text-sm text-gray-600 bg-gray-200 p-1 rounded">{category}</span>
            </div>
        </li>
    );
};

export default Item;
