import React from "react";
import { Link } from "react-router-dom";

import { Reposits, Badges } from "./styles";

export default function Profile({ repo }) {
  return (
    <Reposits>
      <Link to={repo.html_url}>{repo.name}</Link>

      <Badges>
        <span>Stars: {repo.stargazers_count}</span>
        <span>Watch: {repo.watchers_count}</span>
        <span>Forks: {repo.forks_count}</span>
      </Badges>
    </Reposits>
  );
}
