import React from "react";
import { useParams } from "react-router-dom";
import { GetGithubUser } from "./GithubUsers";

const ShowGithubUser = () => {
  const { username } = useParams();
  return <GetGithubUser username={username} />;
};

export default ShowGithubUser;
