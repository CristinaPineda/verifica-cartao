import styled from 'styled-components';
import 'react-credit-cards/es/styles-compiled.css';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  color: rgb(28,28,28);
  margin: 0 2rem;

  @media (min-width: 768px) {
    margin: 3rem 2rem;

    p {
      font-size: 20px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  padding: 1.5rem;
  border: 2px solid gray;
  border-radius: 10px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: auto;
    width: 80%;
  }
`;

export const Form = styled.form`
  margin-top: 1rem;
  width: 100%;

  input, button {
    margin-bottom: 0.5rem;
    background-color: gainsboro;
    border-radius: 5px;
    padding: 0.4rem;
    font-size: 1rem;
    width: 70%;
  }

  button {
    width: 50%;
    color: white;
    background-color: mediumseagreen;
  }

  @media (min-width: 768px) {
    input:hover {
    background-color: silver;
    }

    button:hover {
    background-color: mediumaquamarine;
    }
  }
`;
