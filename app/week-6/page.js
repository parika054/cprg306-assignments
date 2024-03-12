// /app/week-6/page.js

"use client";
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json'; 

const Page = () => {
    const [items, setItems] = useState(itemsData);
    const handleAddItem = (newItem)=> {
        setItems(currentItems => [...currentItems, newItem]);
    };
  return (
    <main className=" p-5 min-h-screen bg-green-300">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-900">Shopping List</h1>
        <NewItem onAddItem={handleAddItem}/>
          <ItemList items={items}/>
        </div>
    </main>
  );
};

export default Page;