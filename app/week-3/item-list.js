// /app/week-5/item-list.js
import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json'; // Importing the items data
const ItemList = () => {
    // State to manage the sorting criteria
    const [sortBy, setSortBy] = useState('name');

    // Function to sort items based on the current sortBy state
    const sortItems = (items, criteria) => {
        return items.sort((a, b) => {
            if (criteria === 'name') {
                return a.name.localeCompare(b.name);
            }
            return a.category.localeCompare(b.category);
        });
    };

    // Inline styles for active and inactive buttons
    const buttonStyle = (isActive) => ({
        cursor: 'pointer',
        padding: '10px 20px',
        margin: '0 5px',
        backgroundColor: isActive ? '#FFA500' : 'transparent', // Active buttons have an orange background
        color: isActive ? 'white' : 'black', // Active buttons have white text
        border: `1px solid ${isActive ? '#FFA500' : 'grey'}`,
        borderRadius: '5px',
        outline: 'none',
    });

    // Sorted items based on the sortBy state
    const sortedItems = sortItems([...itemsData], sortBy);

    return (
        <div>
            {/* Sort buttons with conditional styling */}
            <div className="flex justify-center gap-2 mb-4">
                <button
                    className={`btn ${sortBy === 'name' ? 'active' : ''}`}
                    onClick={() => setSortBy('name')}
                >
                    Name
                </button>
                <button
                    className={`btn ${sortBy === 'category' ? 'active' : ''}`}
                    onClick={() => setSortBy('category')}
                >
                    Category
                </button>
            </div>
            {/* Item list */}
            <ul className="max-w-md mx-auto mt-8 grid gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
                {sortedItems.map((item) => (
                    <Item key={item.id} {...item} />
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
