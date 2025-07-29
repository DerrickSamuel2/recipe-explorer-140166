import React from "react";
import "./RecipeCard.css";

// PUBLIC_INTERFACE
export function RecipeCard({ recipe, isFavorite, onToggleFavorite, onClick }) {
  return (
    <div className="recipe-card" onClick={onClick}>
      <div className="recipe-img-wrapper">
        <img
          className="recipe-img"
          src={recipe.image || "https://source.unsplash.com/400x300/?food,recipe"}
          alt={recipe.title}
        />
        <button
          className={`fav-toggle-btn ${isFavorite ? "is-fav" : ""}`}
          onClick={e => {
            e.stopPropagation();
            onToggleFavorite();
          }}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>
      <div className="recipe-info">
        <h3 className="recipe-title">{recipe.title}</h3>
        <div className="recipe-meta">
          <span className="cuisine">{recipe.cuisine}</span>
          <span className="ingredients">{recipe.ingredients.slice(0,2).join(", ")}</span>
        </div>
      </div>
    </div>
  );
}
