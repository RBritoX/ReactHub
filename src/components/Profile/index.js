import React from 'react';
import { Link } from 'react-router-dom';

import { FaFolder, FaUsers, FaUserFriends } from 'react-icons/fa';

import { Perfil, ListProfile } from './styles';

export default function Profile({ user }) {
  return (
    <Perfil>
      <img src={user.avatar_url} alt="avatar" />

      <ListProfile>
        <li>
          <p>
            <FaFolder />
            Repositories
          </p>
          <span>{user.public_repos}</span>
        </li>
        <li>
          <p>
            <FaUsers />
            Followers
          </p>
          <span>{user.followers}</span>
        </li>
        <li>
          <p>
            <FaUserFriends />
            Following
          </p>
          <span>{user.following}</span>
        </li>
      </ListProfile>

      <Link to={user.html_url} target="_blank">
        Ver Perfil
      </Link>
    </Perfil>
  );
}
