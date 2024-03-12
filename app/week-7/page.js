// /app/week-7/page.js

"use client";
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas'; // Import the MealIdeas component
import itemsData from './items.json';

const Page = () => {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(''); // State to keep track of the selected item

    const handleAddItem = (newItem) => {
        setItems(currentItems => [...currentItems, newItem]);
    };

    // Event handler for when an item is clicked
    const handleItemSelect = (itemName) => {
        const cleanedName = cleanItemName(itemName); // Clean up the item name to use with the API
        setSelectedItemName(cleanedName); // Update the state with the cleaned item name
    };

    // Function to clean up item names, removing quantity and emoji
    const cleanItemName = (itemName) => {
        return itemName.split(',')[0].replace(/[\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�]/g, '').trim();
    };

    return (
        <main className="p-5 min-h-screen bg-green-300 flex justify-between">
            <div className="w-1/2">
                <h1 className="text-4xl font-bold text-center text-blue-900">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} /> {/* Pass handleItemSelect to ItemList */}
            </div>
            <div className="w-1/2">
                <MealIdeas ingredient={selectedItemName} /> {/* Pass the selected item name to MealIdeas */}
            </div>
        </main>
    );
};

export default Page;
