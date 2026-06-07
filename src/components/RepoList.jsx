export default function RepoList({ repos }) {
  const sorted = [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6);

  return (
    <div style={{ marginTop: "24px" }}>
      <h3 style={{ marginBottom: "12px" }}>Top Repos</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        {sorted.map((repo) => (
          <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer"
            style={{ padding: "14px", border: "1px solid #e1e4e8", borderRadius: "10px", textDecoration: "none", color: "inherit", display: "block" }}>
            <p style={{ margin: "0 0 6px", fontWeight: "600", fontSize: "14px", color: "#0969da" }}>{repo.name}</p>
            <p style={{ margin: "0 0 10px", fontSize: "13px", color: "#57606a", minHeight: "36px" }}>
              {repo.description?.slice(0, 60) || "No description"}
            </p>
            <div style={{ display: "flex", gap: "12px", fontSize: "12px", color: "#57606a" }}>
              <span>⭐ {repo.stargazers_count}</span>
              {repo.language && <span>• {repo.language}</span>}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}