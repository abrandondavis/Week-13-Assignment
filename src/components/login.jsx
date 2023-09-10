import React from 'react';

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevents default behavior to not refresh page when submit is clicked when empty
  }
  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <h3 className='login-header'>Login</h3>
        <div className='input-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' placeholder='YourEmail@exmaple.com' />
        </div>
        <div className='input-group'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' placeholder='*******' />
        </div>
        <button type='submit' id='login-button'>Login</button>
      </form>
    </div>
  );
};