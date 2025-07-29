import React from "react";
import "./TopNav.css";

// PUBLIC_INTERFACE
export function TopNav({ search, setSearch, favoritesCount }) {
  return (
    <header className="topnav">
      <div className="logo">
        <span role="img" aria-label="cooking pot">🍲</span>
        <span className="brand">Recipe Explorer</span>
      </div>
      <div className="nav-search">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="search-input"
          placeholder="Search recipes..."
        />
      </div>
      <div className="nav-actions">
        <button className="favorites-btn" title="Favorites">
          <span role="img" aria-label="heart">❤️</span>
          <span className="fav-count">{favoritesCount}</span>
        </button>
      </div>
    </header>
  );
}
