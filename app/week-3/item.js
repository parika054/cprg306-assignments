// /app/week-3/item.js
import React from 'react';

const Item = ({ name, quantity, category }) => {
    return (
        <li className="mb-4">
            <div className="flex items-center justify-between">
                <div>
                    <p className="font-bold">{name}</p>
                    <p className="text-sm text-gray-700">Quantity: {quantity}</p>
                </div>
                <span className="text-sm text-gray-600">{category}</span>
            </div>
        </li>
    );
};

export default Item;
