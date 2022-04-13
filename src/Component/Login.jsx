import React, { useState } from 'react';
import MovieContext from '../context/moviesContext';
import { Input, Button } from '../eleComponent';
import './css/Login.css';

function Login() {
  const [info, setInfo] = useState({ username: '', password: '' });
  const { setIsLogin } = React.useContext(MovieContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLogin(true);
  };
  return (
    <div className="login-contanier">

      <form className="form-login" onSubmit={handleSubmit}>
        <h1 className="login-title">LOGIN</h1>
        <Input
          className="login-input"
          type="text"
          onChange={(e) => setInfo({ ...info, username: e.target.value })}
          value={info.username}
          placeholder="user name"
        />
        <Input className="login-input" type="password" onChange={(e) => setInfo({ ...info, password: e.target.value })} value={info.password} placeholder="password" />
        <Button title="LOGIN" className="log-Btn" />
      </form>
    </div>

  );
}

export default Login;
