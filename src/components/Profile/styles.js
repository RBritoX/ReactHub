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

  a {
    margin-top: 30px;
    padding: 5px 15px;
    text-decoration: none;
    background: #eee;
    color: #000;
    border-radius: 10px;

    &:hover {
      background: ${darken(0.05, '#eee')};
      font-weight: bold;
    }
  }
`;

export const Bio = styled.div`
  margin: 20px 0;

  h1 {
    font-size: 20px;
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

    p svg {
      margin-right: 5px;
    }
  }
`;
