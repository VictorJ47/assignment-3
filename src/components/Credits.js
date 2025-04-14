// src/components/Credits.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Credits(props) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCredit = {
      id: Math.random().toString(36).substring(2, 9),
      description,
      amount: parseFloat(amount),
      date: new Date().toISOString(),
    };
    props.addCredit(newCredit);
    setDescription('');
    setAmount('');
  };

  return (
    <div>
      <h1>Credits</h1>
      <p><strong>Account Balance:</strong> ${props.accountBalance.toFixed(2)}</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Description: </label>
          <input 
            type="text" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required
          />
        </div>
        <div>
          <label>Amount: </label>
          <input 
            type="number" 
            step="0.01" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            required
          />
        </div>
        <button type="submit">Add Credit</button>
      </form>

      <h2>Credit Entries</h2>
      <ul>
        {props.credits.map((credit) => (
          <li key={credit.id}>
            {credit.description} — ${credit.amount.toFixed(2)} on {new Date(credit.date).toLocaleDateString()}
          </li>
        ))}
      </ul>

      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Credits;