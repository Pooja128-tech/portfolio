import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OtpVerify() {
  const [otp, setOtp] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // The username should have been saved previously (Forgot page)
  // e.g. localStorage.setItem('reset_username', username)
  const username = localStorage.getItem('reset_username') || '';

  const handleVerify = async (e) => {
    e.preventDefault();
    setMsg('');
    if (!username) {
      setMsg('Username missing. Please start the forgot password flow again.');
      return;
    }
    if (!otp) {
      setMsg('Please enter the OTP.');
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('https://portfolio-nu-weld-49.vercel.app', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, otp }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || 'OTP verification failed');

      // store reset token temporarily to call /reset
      localStorage.setItem('reset_token', data.resetToken);
      // optional: clear saved username (or keep it)
      // localStorage.removeItem('reset_username');

      // navigate to reset password page
      navigate('/reset');
    } catch (err) {
      setMsg(err.message || 'Verification error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Verify OTP</h2>
      <form onSubmit={handleVerify}>
        <input
          type="text"
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value.trim())}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Verifying...' : 'Verify OTP'}
        </button>
      </form>

      {msg && <p style={{ color: 'red', marginTop: 12 }}>{msg}</p>}

      <a className="link" href="/forgot">Resend / Go back</a>
    </div>
  );
}
