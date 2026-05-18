import React, { useState } from 'react';

export default function ForgotPassword() {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`OTP sent to ${username} (mock demo)`);
  };

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit">Send OTP</button>
      </form>
      <a className="link" href="/reset-password">Already got OTP?</a>
    </div>
  );
}
