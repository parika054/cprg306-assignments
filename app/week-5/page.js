// /app/week-5/page.js
"use client";
import React from 'react';
import ItemList from './item-list.js';

const Page = () => {
    return (
        <main className="container mx-auto my-8 p-8 bg-gray-150 shadow-lg rounded-lg">
            <h1 className="text-4xl font-bold mb-8">Shopping List</h1>
            <ItemList />
        </main>
    );
};

export default Page;






