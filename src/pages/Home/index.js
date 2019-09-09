import React, { Component } from 'react';

import api from '../../services/api';

import Profile from '../../components/Profile';
import Repos from '../../components/Repos';

import { FaGithub, FaSearch } from 'react-icons/fa';

import { Container, Form, Main } from './styles';

class Home extends Component {
  state = {
    user: [],
    repos: [],
  };

  getUser = e => {
    const user = e.target.value;

    api.get(`users/${user}`).then(({ data }) => this.setState({ user: data }));

    api
      .get(`users/${user}/repos`)
      .then(({ data }) => this.setState({ repos: data }));
  };

  renderProfile = () => {
    const { user, repos } = this.state;

    console.log(repos);

    return (
      <Main>
        <div className="profile">
          <Profile user={user} />
        </div>
        <div className="repos">
          {repos.map(repos => (
            <Repos key={repos.name} repo={repos} />
          ))}
        </div>
      </Main>
    );
  };

  render() {
    return (
      <Container>
        <Form>
          <h1>
            <FaGithub />
          </h1>
          <input
            onChange={this.getUser}
            placeholder="Digite o nome de um usuário..."
            required
          />

          <button type="submit">
            <FaSearch />
          </button>
        </Form>
        {this.state.user.length !== 0 ? this.renderProfile() : null}
      </Container>
    );
  }
}

export default Home;
