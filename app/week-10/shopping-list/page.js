// /app/week-7/page.js

"use client";
import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-services";

const Page = () => {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    // Load items from Firebase
    const loadItems = async () => {
      if (user) {
        const itemsFromService = await getItems(user.uid);
        setItems(itemsFromService);
      }
    };
    loadItems();
  }, [user]); // Depend on user to reload items when user changes

  const handleAddItem = async (itemName) => {
    if (user) {
      // Ensure item is structured as an object
      const itemObject = { name: itemName }; // Adjust this line based on the expected structure
      const id = await addItem(user.uid, itemObject); // Add item to Firebase
      setItems((currentItems) => [...currentItems, { ...itemObject, id }]); // Add new item with id to state
    }
  };
  

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g,
        ""
      )
      .trim();
    setSelectedItemName(cleanedName);
  };


    return (
        <main className="p-5 min-h-screen bg-green-300 flex justify-between">
            <div className="w-1/2">
                <h1 className="text-4xl font-bold text-center text-blue-900">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} /> 
            </div>
            <div className="w-1/2">
                <MealIdeas ingredient={selectedItemName} /> 
            </div>
        </main>
    );
};

export default Page;
