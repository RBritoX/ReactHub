import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px 50px;
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 20px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 50px 0 20px;
  padding: 30px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  h1 {
    margin-right: 30px;

    svg {
      font-size: 50px;
    }
  }

  input {
    width: 100%;
    height: 40px;
    padding: 0 20px;
    border: 1px solid #eee;
    border-radius: 5px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eee;
    width: 50px;
    height: 40px;
    border: none;
    border-radius: 5px;
    padding: 0 5px;
    margin-left: 15px;
    transition: all 0.3s;

    &:hover {
      background: ${darken(0.1, '#eee')};
      transition: all 0.3s;
    }

    svg {
      font-size: 20px;
    }
  }
`;
