//app/week-6/item-list.js

"use client";
import React, { useState } from 'react';
import Item from './item'; 

function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('name');


//Sorting "Items" by "Name" and "Category" using "localeCompare" method.
const getSortedItems = () => {
    return [...items].sort((a, b) => { 
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
    });
  };

  const sortedItems = getSortedItems();
  return (
    <div className="container mx-auto mt-5">
      <div className="flex justify-center gap-2 mb-4 text-black font-semibold">
  
  {/*Creating sorting buttons for "Name" and "Category".*/}
      
        Sort by :
        <button
          className={`px-4 py-2 text-sm font-medium rounded-md transition duration-500 ease-in-out ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-blue-200 text-blue-900'} hover:bg-blue-400`}
          onClick={() => setSortBy('name')}
        >
          Name
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium rounded-md transition duration-500 ease-in-out ${sortBy === 'category' ? 'bg-blue-700 text-white' : 'bg-blue-200 text-blue-900'} hover:bg-blue-400`}
          onClick={() => setSortBy('category')}
        >
          Category
        </button>
      </div>
      <ul>
        {/* Render Items*/}
        {sortedItems.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
