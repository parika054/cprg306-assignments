// /app/week-3/page.js
import React from 'react';
import ItemList from './item-list';

const Page = () => {
    return (
        <main className="container mx-auto my-8 p-8 bg-gray-150">
            <h1 className="text-4xl font-bold mb-8">Shopping List</h1>
            <ItemList />
        </main>
    );
};

export default Page;
