import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import { Content, Form } from '../styles';
import '../styles/style.scss';

export default function Cartao() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');

  return(
    <Content>
      <div className="card">
        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
          />
      </div>
      <div>
        <Form>
          <div>
            <input
              type="number"
              name="number"
              placeholder="Número do cartão"
              value={number}
              maxLength="16"
              onChange={(e) => setNumber(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              />
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Nome"
              maxLength="45"
              onChange={(e) => setName(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              />    
          </div>
          <div>
            <input
              type="number"
              name="expiry"
              placeholder="Validade: 'MM/AA'"
              value={expiry}
              maxLength="4"
              onChange={(e) => setExpiry(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              />
            <input
              type="number"
              name="cvc"
              placeholder="CVC"
              value={cvc}
              maxLength="3"
              onChange={(e) => setCvc(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
            <button type="button">Pagar</button>
          </div>
        </Form>
      </div>
    </Content>
  )
}
