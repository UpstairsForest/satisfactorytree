import React from "react";

const Box = ({name, position}) => {
    const [selectedRecipe, setSelectedRecipe] = React.useState("");

    const handleRecipeChange = (event) => {
        setSelectedRecipe(event.target.value);
    };

    return (
        <div style={{
            position: "absolute",
            left: position.x,
            top: position.y,
            padding: "10px",
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "5px",
        }}>
            <h4>{name}</h4>
            <select value={selectedRecipe} onChange={handleRecipeChange}>
                <option value="">Select a recipe</option>
                <option value="recipe1">Recipe 1</option>
                <option value="recipe2">Recipe 2</option>
            </select>
        </div>
    );
};

export default Box;