import React from 'react';
import { Link } from 'react-router-dom';

import { FaStar, FaEye, FaCodeBranch } from 'react-icons/fa';

import { Reposits, Badges } from './styles';

export default function Profile({ repo }) {
  return (
    <Reposits>
      <Link to={repo.html_url} target="_blank">
        {repo.name}
      </Link>

      <Badges>
        <span>
          <FaStar />
          Stars: {repo.stargazers_count}
        </span>
        <span>
          <FaEye />
          Watch: {repo.watchers_count}
        </span>
        <span>
          <FaCodeBranch />
          Forks: {repo.forks_count}
        </span>
      </Badges>
    </Reposits>
  );
}
