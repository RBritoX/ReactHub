import React from 'react';

import { FaFolder, FaUsers, FaUserFriends } from 'react-icons/fa';

import { Perfil, ListProfile, Bio, LinkGit } from './styles';

export default function Profile({ user }) {
  return (
    <Perfil>
      <img src={user.avatar_url} alt="avatar" />

      <Bio>
        <h1>{user.name}</h1>
        <p>{user.login}</p>
      </Bio>
      <ListProfile>
        <li>
          <div>
            <span>
              <FaFolder />
            </span>
            <a
              href={`https://github.com/${user.login}/repositories`}
              target="_blank"
            >
              Repositories
            </a>
          </div>
          <strong>{user.public_repos}</strong>
        </li>
        <li>
          <div>
            <span>
              <FaUsers />
            </span>
            <a
              href={`https://github.com/${user.login}/followers`}
              target="_blank"
            >
              Followers
            </a>
          </div>
          <strong>{user.followers}</strong>
        </li>
        <li>
          <div>
            <span>
              <FaUserFriends />
            </span>
            <a
              href={`https://github.com/${user.login}/following`}
              target="_blank"
            >
              Following
            </a>
          </div>
          <strong>{user.following}</strong>
        </li>
      </ListProfile>

      <LinkGit>
        <a href={user.html_url} target="_blank">
          Ver Perfil
        </a>
      </LinkGit>
    </Perfil>
  );
}
