import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GithubUserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Utenti Github:</h2>
      <div>Seleziona l'utente e aggiungilo.</div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubUserList;
