import styled from 'styled-components';
import { darken } from 'polished';

export const Reposits = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 775px;
  min-width: 100%;
  margin-left: 25px;
  margin-bottom: 10px;
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  a {
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: #ff0000;
    }
  }

  &:hover {
    background: ${darken(0.05, '#fff')};
    transform: translateY(-2px);
    transition: all 0.3s;
  }
`;

export const Badges = styled.div`
  display: flex;
  align-items: center;

  span svg {
    margin: 0 5px 0 15px;
  }
`;
