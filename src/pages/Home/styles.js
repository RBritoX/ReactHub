import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px 50px;
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 30px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 50px 0 30px;
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
`;
