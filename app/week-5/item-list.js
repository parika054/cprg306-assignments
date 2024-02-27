// /app/week-5/item-list.js
import React, { useState } from 'react';
import Item from './item.js';
import itemsData from './items.json'; // Assuming the path is correct and items.json is in the same folder

const ItemList = () => {
    // Initialize state within the component
    const [sortBy, setSortBy] = useState('name');

    // Sort the items based on the sortBy state
    const sortedItems = itemsData.sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
    });

    // Return the list of sorted items
    return (
        <div>
        <div className="flex justify-center space-x-2 my-4">
            <button onClick={() => setSortBy('name')} className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 focus:outline-none">Sort by Name</button>
            <button onClick={() => setSortBy('category')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">Sort by Category</button>
            {/* Add your logic for Grouped Category button if needed */}
        </div>
        <ul className="max-w-md mx-auto mt-8 grid gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
            {sortedItems.map((item) => (
                <Item key={item.id} {...item} />
            ))}
        </ul>
    </div>
    );
};

export default ItemList;
