import React from 'react';

import { FaStar, FaEye, FaCodeBranch } from 'react-icons/fa';

import { Reposits, Badges } from './styles';

export default function Profile({ repo }) {
  return (
    <Reposits>
      <a href={repo.html_url} target="_blank">
        {repo.name}
      </a>

      <Badges>
        <span className="stars">
          <FaStar />
          Stars: <strong>{repo.stargazers_count}</strong>
        </span>
        <span className="watch">
          <FaEye />
          Watch: <strong>{repo.watchers_count}</strong>
        </span>
        <span className="forks">
          <FaCodeBranch />
          Forks: <strong>{repo.forks_count}</strong>
        </span>
      </Badges>
    </Reposits>
  );
}
