import React from "react";
import "./SideMenu.css";

// PUBLIC_INTERFACE
export function SideMenu({
  cuisines,
  ingredients,
  selectedCuisine,
  setSelectedCuisine,
  selectedIngredient,
  setSelectedIngredient,
  resetFilters
}) {
  return (
    <aside className="sidemenu">
      <h2 className="filter-title">Filters</h2>
      <div className="filter-group">
        <label className="filter-label">Cuisine</label>
        <select
          value={selectedCuisine}
          onChange={e => setSelectedCuisine(e.target.value)}
        >
          <option value="">All</option>
          {cuisines.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label className="filter-label">Ingredient</label>
        <select
          value={selectedIngredient}
          onChange={e => setSelectedIngredient(e.target.value)}
        >
          <option value="">All</option>
          {ingredients.map(i => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
      </div>
      <button className="clear-btn" onClick={resetFilters}>
        Clear Filters
      </button>
    </aside>
  );
}
