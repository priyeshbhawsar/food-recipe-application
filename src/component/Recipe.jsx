import React from 'react'
import { useEffect, useState } from 'react';
import axois from 'axios'
import Recipes from './Recipes';
const Recipe = () => {
    const APP_ID = "ec5e06b5";
    const APP_KEY = "644aa585b6abd3630fcda328bceb9d9a";
    const [recipe, setRacipe] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");
    useEffect(() => {
        getRecipes();

    }, [query])
    const getRecipes = async () => {
        const response = await axois.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        console.log(response)
        setRacipe(response.data.hits)

    }
    const updateSearch = (e) => {
        setSearch(e.target.value)

    }
    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search)
    }
    return (
        <div>
            <form onSubmit={getSearch}>
                <div className='container w-25 p-3'>
                    <div class="input-group">
                        <input type="text" class="form-control col-auto w-25 p-3" value={search} onChange={updateSearch} placeholder="Recipes Search" />
                        <button class="btn btn-success" type="submit">Search</button>
                    </div>
                </div>
            </form>
            <div >
                <div className='row mt-5 '>
                    {recipe.map(recipe => (
                        <Recipes key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Recipe