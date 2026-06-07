import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import RepoList from "./components/RepoList";
import SkeletonLoader from "./components/SkeletonLoader";
import { useFetch } from "./hooks/useFetch";
export default function App() {
  const [username, setUsername] = useState("");

  const { data: user, loading: userLoading, error: userError } = useFetch(
    username ? `https://api.github.com/users/${username}` : null
  );
  const { data: repos, loading: reposLoading } = useFetch(
    username ? `https://api.github.com/users/${username}/repos?per_page=100` : null
  );

  const loading = userLoading || reposLoading;

  return (
    <div style={{ maxWidth: "720px", margin: "40px auto", padding: "0 20px", fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ marginBottom: "24px" }}>GitHub Profile Finder</h1>
      <SearchBar onSearch={setUsername} />

      {loading && <SkeletonLoader />}

      {userError && (
        <div style={{ marginTop: "24px", padding: "16px", background: "#fff0f0", borderRadius: "10px", color: "#cf222e" }}>
          {userError}
        </div>
      )}

      {!loading && user && <UserCard user={user} />}
      {!loading && repos && <RepoList repos={repos} />}
    </div>
  );
}