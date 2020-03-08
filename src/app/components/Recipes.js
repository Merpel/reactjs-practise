import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

//const exampleAddr = 'https://api.edamam.com/search?q=chicken&app_id=' + APP_ID + '&app_key=' + APP_KEY;

// https://developer.edamam.com/admin/applications/1409619368787 
//muista laittaa logo näkyviin, jos otat täältä tietoja

export const Recipes = (props) => {
    console.log(props);

    //const [recipesList, setRecipes] = useState([]);

    // useEffect(async () => {
    //     getResults();
    // }, []);

    // const getResults = async () => {
    //     const response = await fetch();
    //     const data = await response.json();
    //     setRecipes(data.hits);
    // }

    var recipesList = ["Kanakeitto", "Kanapata"];

    return (
        <div id="container">
            <form className="search-form">
                <input className="search-box" type="text" />
                <button className="search-button" type="submit">Search</button>
            </form>
            {recipesList}
            {/* {recipesList.map(recipe, i => (
                <Recipe title={recipe.recipe.title} calories={recipe.recipe.calories} key={i} />
            ))}; */}
        </div>

    );

};