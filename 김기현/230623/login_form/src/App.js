import React, { useState } from 'react';

const LoginForm = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userId === 'admin' && password === 'password') {
      setLoggedIn(true);
    } else {
      alert('Wrong ID or password');
    }
  };

  if (loggedIn) {
    return <div>Welcome!</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        UserId:
        <input type="text" value={userId} onChange={handleUserIdChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
