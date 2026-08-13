import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import RepoList from "./components/RepoList";
import SkeletonLoader from "./components/SkeletonLoader";
import ThemeToggle from "./components/ThemeToggle";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
export default function App() {
  const [username, setUsername] = useState("");

  const fetchUser = async ({ queryKey }) => {
    const [, name] = queryKey;
    const res = await axios.get(`https://api.github.com/users/${name}`);
    return res.data;
  };

  const fetchRepos = async ({ queryKey }) => {
    const [, name] = queryKey;
    const res = await axios.get(`https://api.github.com/users/${name}/repos?per_page=100`);
    return res.data;
  };

  const { data: user, isLoading: userLoading, error: userError } = useQuery({
    queryKey: ["user", username],
    queryFn: fetchUser,
    enabled: !!username,
    retry: false,
  });

  const { data: repos, isLoading: reposLoading } = useQuery({
    queryKey: ["repos", username],
    queryFn: fetchRepos,
    enabled: !!username,
    retry: false,
  });

  const loading = userLoading || reposLoading;

  const userErrorMessage = userError
    ? userError.response?.status === 404
      ? "User not found"
      : userError.message
    : null;

  return (
    <div style={{ maxWidth: "850px", margin: "40px auto", padding: "0 20px", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
        <h1 style={{ margin: 0 }}>GitHub Profile Finder</h1>
        <ThemeToggle />
      </div>
      <SearchBar onSearch={setUsername} />

      {loading && <SkeletonLoader />}

      {userError && (
        <div style={{ marginTop: "24px", padding: "16px", background: "var(--color-danger-bg)", borderRadius: "10px", color: "var(--color-danger-text)" }}>
          {userError}
        </div>
      )}

      {!loading && user && <UserCard user={user} />}
      {!loading && repos && <RepoList repos={repos} />}
    </div>
  );
}