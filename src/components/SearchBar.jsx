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
        style={{ flex: 1, padding: "10px 14px", borderRadius: "8px", border: "1px solid var(--color-border)", fontSize: "15px", background: "var(--color-bg-elevated)", color: "var(--color-text)", focus: { outline: "none" } }}
      />
      <button type="submit" style={{ padding: "10px 20px", borderRadius: "8px", background: "var(--color-accent)", color: "var(--color-accent-text)", border: "none", cursor: "pointer", fontSize: "15px", focus: { outline: "none" } }}>
        Search
      </button>
    </form>
  );
}