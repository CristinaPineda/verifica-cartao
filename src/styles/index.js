import styled from 'styled-components';
import 'react-credit-cards-2/es/styles-compiled.css';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  color: white;
  margin: 0;
  background-color: dimgray;
  border: 1px solid black;
  
  @media (min-width: 768px) {
    margin: 3rem 0;
    
    p {
      font-size: 20px;
    }
  }
`;
  
  export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
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

  div {
    background-color: whitesmoke;
  }
  
  input, button {
    margin-bottom: 0.5rem;
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

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
  input[type="number"] {
      -moz-appearance: textfield;
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

export const FooterApp = styled.footer`
  display: flex;
  color: white;
  flex-direction: column;
  background-color: dimgray;
  border-top: 1px solid black;
  
  .footer-top {
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    margin:auto;

    div {
      width: 50%;
    }
    
    .social-icons {
      display: flex;
      flex-direction: column;
    }
    
    .icons {
      color: white;
      font-size: 20px;
      margin-bottom: 8px;
    }
  }

  .footer-details {
    border-top: 1px solid black;
    display: flex;
    flex-direction: column;
    margin:auto;

    h4 {
      font-size: 18px;
    }
    
    ul {
      display: flex;
      margin: auto;
      padding: 0;
    }
    
    li, .contact {
      font-size: 18px;
      list-style: none;
      text-align: left;
      margin: 5px;
    }
  }

  @media (min-width: 768px) {
    margin-top: 11rem;
    display: flex;
    flex-direction: row;
    bottom: 0;
    
    .footer-top {
      margin: auto;
      width: 30%;

      .icons {
        font-size: 25px;
      }
    }

    .footer-details {
      border-top: none;
      display: flex;
      align-items: center;
      margin: 0;
      width: 25%;
    }

    .footer-bottom {
      border-top: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: auto;
      width: 30%;
    }
  }
`;
