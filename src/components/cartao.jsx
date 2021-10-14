import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export default function PaymentForm() {
  const [number] = useState('');
  const [name] = useState('');
  const [expiry] = useState('');
  const [cvc] = useState();

  return(
    <div id="PaymentForm">
      <Cards
        cvc={cvc}
        expiry={expiry}
        //focused={focus}
        name={name}
        number={number}
      />
    </div>
  )
}
