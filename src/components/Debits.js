import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Debits(props) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDebit = {
      id: Math.random().toString(36).substring(2, 9),
      description,
      amount: parseFloat(amount),
      date: new Date().toISOString(),
    };
    props.addDebit(newDebit);
    setDescription('');
    setAmount('');
  };

  return (
    <div>
      <h1>Debits</h1>
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
        <button type="submit">Add Debit</button>
      </form>

      <h2>Debit Entries</h2>
      <ul>
        {props.debits.map((debit) => (
          <li key={debit.id}>
            {debit.description} — ${debit.amount.toFixed(2)} on {new Date(debit.date).toLocaleDateString()}
          </li>
        ))}
      </ul>

      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Debits;