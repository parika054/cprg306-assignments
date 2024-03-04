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
        <div className="px-2">
          <label htmlFor="sort">Sort by:</label>
          <button className={` p-1 m-2 w-28 hover:scale-110 duration-300 ease-out ${sortBy == "name" ? "bg-orange-500" : "bg-orange-700"}`} value="name" onClick={(value1) => { setSortBy(value1.target.value); }}>Name</button>
          <button className={` p-1 m-2 w-28 hover:scale-110 duration-300 ease-out ${sortBy == "category" ? "bg-orange-500" : "bg-orange-700"}`} onClick={(value2) => { setSortBy(value2.target.value); }} value="category">Category</button>
          <button className={` p-1 m-2 w-28 hover:scale-110 duration-300 ease-out ${sortBy == "group_list" ? "bg-orange-500" : "bg-orange-700"}`} onClick={(value3) => { setSortBy(value3.target.value); }} value="group_list">Grouped Category</button>
        </div>
        <ul>
          <>
        
          {sortBy != "group_list" ? items.map((item, index) => (
            <Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
          )) : items.map((item, index) => (
            <>
            {item.category == items[wow].category ? "" : <h2 className="text-xl">{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</h2>}
            <span className="hidden">{wow = index}</span>
            <Item key={index-1} name={item.name} quantity={item.quantity} category={item.category} /></>
          ))}
          </>
        </ul>
      </div>
    );
};

export default ItemList;
