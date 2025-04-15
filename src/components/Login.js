/*==================================================
src/components/LogIn.js

Displays the login form and updates the user profile when logged in.
==================================================*/
import React, { useState } from 'react';

function LogIn({ user, mockLogIn }) {
  const [username, setUsername] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mockLogIn({ userName: username });
    setUsername(''); // Clear the input after submitting
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={username} 
          onChange={handleChange} 
          placeholder="Enter your username" 
          required
        />
        <button type="submit">Log In</button>
      </form>
      <p>Logged in as: {user.userName}</p>
    </div>
  );
}

export default LogIn;

