import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GetGithubUser } from "./GithubUsers";

export function NwGitHubUsers() {
  const [username, setUsername] = useState("");
  const [usernames, setUsernames] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && !usernames.includes(username)) {
      setUsernames([...usernames, username]);
    }
    setUsername("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Github username"
        />
        <button type="submit" className="button">
          Cerca
        </button>
      </form>

      <div>
        {usernames.map((username, index) => (
          <div key={index}>
            <Link to={`/users/${username}`}>
              <GetGithubUser username={username} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
