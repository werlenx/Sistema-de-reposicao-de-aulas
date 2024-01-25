
import { CardLogin } from "../components/login/CardLogin";
import { InputStyled } from "../components/Input.style";
import { ButtonStyled } from "../components/Buttom.styled";

import React, {useState} from "react";




export default function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    
    const handleLogin = () => {
        if (username === 'werlen' && password === 'werlen1') {
            
        }else{
            console.log('deu ruim maluco');
            alert('deu ruim');
        }
    }
    return (
        <CardLogin>
                <div className="banner">
                    
                </div>
                <div className="form">
                    <img src="../../public/icoLogin 1.svg" alt="" />
                    <form action="">
                        <label htmlFor="username">Email ou usuario:</label>
                        <InputStyled
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        ></InputStyled>
                        <label htmlFor="password">Senha:</label>
                        <InputStyled
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></InputStyled>
                        
                        <ButtonStyled type="button" id="login-buttom" onClick={handleLogin}>Entrar</ButtonStyled>
                    </form>
                    
                </div>
        </CardLogin>
    )
}