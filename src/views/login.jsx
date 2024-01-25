import { CardLogin } from "../components/login/CardLogin";
import { InputStyled } from "../components/Input.style";
import { ButtonStyled } from "../components/Buttom.styled";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate('');

  const handleLogin = () => {
    if (username === 'w' && password === 'w') {
      navigate('/home');
    } else {
      setErrorMessage('Credenciais inválidas. Por favor, tente novamente.');
    }
  }

  return (
    <CardLogin>
      <div className="banner"></div>
      <div className="form">
        <img src="../../public/icoLogin 1.svg" alt="" />
        <form action="">
          <label htmlFor="username">Email ou usuário:</label>
          <InputStyled
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Senha:</label>
          <InputStyled
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
            <ButtonStyled type="button" id="login-button" onClick={handleLogin}>
              Entrar
            </ButtonStyled>
          

          {errorMessage && (
            <div style={{ color: 'red', marginTop: '10px' }}>
              {errorMessage}
            </div>
          )}
        </form>
      </div>
    </CardLogin>
  );
}
