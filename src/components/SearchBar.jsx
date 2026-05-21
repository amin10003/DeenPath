import React from "react";

// Destructure value and onChange from props
function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search Surah..."
      className="w-full p-3 border rounded mb-6"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;
