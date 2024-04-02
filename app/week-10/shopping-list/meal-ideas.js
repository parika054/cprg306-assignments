import React, { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState(null);
    const [ingredients, setIngredients] = useState(null);
    const [id, setId] = useState(null);

    function loadMealIdeas() {
        if (ingredient !== "") {
            fetchMealIdeas({ ingredient }).then((data) => {
                setMeals(data);
            });
        }
    }

    function loadMealIngredients() {
        if (id !== null) {
            fetchMealIngredients(id).then((data) => {
                const ingredientsList = [];
                for (let key in data) {
                    if (key.startsWith("strIngredient") && data[key]) {
                        const ingredientNumber = key.replace("strIngredient", "");
                        const measureKey = `strMeasure${ingredientNumber}`;
                        const measure = data[measureKey];
                        const ingredient = data[key];
                        if (measure) {
                            ingredientsList.push(`${measure.trim()} ${ingredient}`);
                        } else {
                            ingredientsList.push(ingredient);
                        }
                    }
                }
                setIngredients(ingredientsList);
            });
        }
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    useEffect(() => {
        loadMealIngredients();
    }, [id]);

    return (
        <div>
            <h2 className="text-3xl font-bold m-2">Meal Ideas</h2>
            {ingredient === "" ? (
                <h2 className="text-xl font-bold m-2">Select an ingredient to see meal ideas</h2>
            ) : (
                <h2 className="text-xl font-bold m-2">Here are some meal ideas using {ingredient}:</h2>
            )}
            {meals !== null ? (
                <>
                    {meals.map((meal, index) => (
                        <div
                            key={index}
                            className={`p-2 m-4 bg-slate-900 max-w-sm hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-opacity-75  flex ${
                                meal.idMeal === id ? "scale-110" : ""
                            }duration-300 ease-out`}
                            onClick={() => {
                                setId(meal.idMeal);
                            }}
                        >
                            <div className={`flex align-middle justify-center ${meal.idMeal === id ? "flex-col" : "flex-row"} text-center w-full`}>
                                <img
                                    src={meal.strMealThumb}
                                    alt={meal.strMeal}
                                    className={` p-1 m-0 justify-center align-middle flex ${
                                        meal.idMeal === id ? "h-full w-full" : "w-40 h-40"
                                    }`}
                                />
                                <div className="flex justify-center align-middle flex-col">
                                    <h2 className="text-xl font-bold flex text-center align-middle justify-center m-2">{meal.strMeal}</h2>
                                    {meal.idMeal === id ? (
                                        <p className="overflow-scroll text-xs h-full text-blue-400">
                                            Ingredients needed are:<br />
                                            <ul>
                                                {ingredients ? (
                                                    ingredients.map((ingredient, index) => (
                                                        <li key={index}>{ingredient}</li>
                                                    ))
                                                ) : (
                                                    <li>No ingredients available</li>
                                                )}
                                            </ul>
                                        </p>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                ""
            )}
            {meals === null && ingredient !== "" ? (
                <h2 className="text-xl font-bold m-2">No meal ideas found for {ingredient}</h2>
            ) : (
                ""
            )}
        </div>
    );
}

async function fetchMealIdeas({ ingredient }) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.error("Error:", error);
    }
}

async function fetchMealIngredients(id) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        return data.meals[0];
    } catch (error) {
        console.error("Error:", error);
    }
}
