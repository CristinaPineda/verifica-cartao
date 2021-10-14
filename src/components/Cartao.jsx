import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import { Content } from '../styles';


export default function Cartao() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState();

  return(
    <Content>
        <Cards
          cvc={cvc}
          expiry={expiry}
          //focused={focus}
          name={name}
          number={number}
          />
      <div>
        <form>
          <input
            type="tel"
            name="number"
            placeholder="Número do cartão"
            maxLength="16"
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            type="text"
            name="name"
            placeholder="Nome"
            maxLength="45"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            name="expiry"
            placeholder="Validade"
            maxLength="4"
            onChange={(e) => setExpiry(e.target.value)}
          />
          <input
            type="number"
            name="cvc"
            placeholder="CVC"
            maxLength="3"
            onChange={(e) => setCvc(e.target.value)}
          />
        </form>
      </div>
    </Content>
  )
}
