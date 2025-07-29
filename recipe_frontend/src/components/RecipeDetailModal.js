import React from "react";
import "./RecipeDetailModal.css";

// PUBLIC_INTERFACE
export function RecipeDetailModal({ recipe, onClose, isFavorite, onToggleFavorite }) {
  if (!recipe) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <div className="modal-header">
          <h2>{recipe.title}</h2>
          <button className={`fav-toggle-btn ${isFavorite ? "is-fav" : ""}`}
            onClick={onToggleFavorite}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
        <img
          src={recipe.image || "https://source.unsplash.com/600x400/?food,recipe"}
          alt={recipe.title}
          className="modal-img"
        />
        <div className="modal-meta">
          <strong>Cuisine:</strong> {recipe.cuisine}<br/>
          <strong>Ingredients:</strong>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
        </div>
        <div className="modal-body">
          <h4>Instructions</h4>
          <p>{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
}
