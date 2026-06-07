export default function UserCard({ user }) {
  return (
    <div style={{ display: "flex", gap: "24px", alignItems: "center", marginTop: "24px", padding: "20px", border: "1px solid #e1e4e8", borderRadius: "12px" }}>
      <img src={user.avatar_url} alt={user.login} style={{ width: "80px", height: "80px", borderRadius: "50%" }} />
      <div>
        <h2 style={{ margin: "0 0 4px" }}>{user.name || user.login}</h2>
        <a href={user.html_url} target="_blank" rel="noreferrer" style={{ color: "#0969da", fontSize: "14px" }}>
          @{user.login}
        </a>
        {user.bio && <p style={{ margin: "8px 0 0", fontSize: "14px", color: "#57606a" }}>{user.bio}</p>}
        <div style={{ display: "flex", gap: "20px", marginTop: "12px", fontSize: "14px", color: "#57606a" }}>
          <span>⭐ {user.public_repos} repos</span>
          <span>👥 {user.followers} followers</span>
          <span>👤 {user.following} following</span>
        </div>
      </div>
    </div>
  );
}