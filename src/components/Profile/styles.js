import styled from 'styled-components';
import { darken } from 'polished';

export const Perfil = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  img {
    width: 150px;
    height: 150px;
  }
`;

export const Bio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  h1 {
    font-size: 15px;
  }

  p {
    font-size: 12px;
  }
`;

export const ListProfile = styled.ul`
  width: 100%;
  list-style: none;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    margin-bottom: 5px;
    color: #6c757d;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: ${darken(0.05, '#fff')};
      transform: translateY(-1px);
      transition: all 0.4s;
      color: #24292e;
    }

    a {
      font-size: 12px;
      text-decoration: none;
      color: inherit;

      &:hover {
        font-weight: bold;
      }
    }

    span svg {
      margin-right: 5px;
    }
  }
`;

export const LinkGit = styled.div`
  margin-top: 30px;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-3px);
    transition: all 0.3s;
  }

  a {
    padding: 5px 15px;
    text-decoration: none;
    background: #7159c1;
    color: #fff;
    border-radius: 10px;

    &:hover {
      background: ${darken(0.1, '#7159c1')};
    }
  }
`;
