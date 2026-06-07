import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) onSearch(input.trim());
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px" }}>
      <input
        type="text"
        placeholder="Search GitHub username..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ flex: 1, padding: "10px 14px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "15px" }}
      />
      <button type="submit" style={{ padding: "10px 20px", borderRadius: "8px", background: "#238636", color: "#fff", border: "none", cursor: "pointer", fontSize: "15px" }}>
        Search
      </button>
    </form>
  );
}