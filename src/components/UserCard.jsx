import { StarIcon, UsersIcon, UserIcon } from "./icons";

const stat = { display: "flex", alignItems: "center", gap: "6px" };

export default function UserCard({ user }) {
  return (
    <div style={{ display: "flex", gap: "24px", alignItems: "center", marginTop: "24px", padding: "20px", border: "1px solid var(--color-border)", borderRadius: "12px", background: "var(--color-bg-elevated)" }}>
      <img src={user.avatar_url} alt={user.login} style={{ width: "80px", height: "80px", borderRadius: "50%" }} />
      <div>
        <h2 style={{ margin: "0 0 4px" }}>{user.name || user.login}</h2>
        <a href={user.html_url} target="_blank" rel="noreferrer" style={{ color: "var(--color-link)", fontSize: "14px" }}>
          @{user.login}
        </a>
        {user.bio && <p style={{ margin: "8px 0 0", fontSize: "14px", color: "var(--color-text-secondary)" }}>{user.bio}</p>}
        <div style={{ display: "flex", gap: "20px", marginTop: "12px", fontSize: "14px", color: "var(--color-text-secondary)" }}>
          <span style={stat}><StarIcon /> {user.public_repos} repos</span>
          <span style={stat}><UsersIcon /> {user.followers} followers</span>
          <span style={stat}><UserIcon /> {user.following} following</span>
        </div>
      </div>
    </div>
  );
}