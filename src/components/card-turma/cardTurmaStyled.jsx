import styled from "styled-components";

export const CardTurmaStyled = styled.div`
    padding: 0;
    width: 400px;
    height: 250px;
    border-radius: 25px;
    overflow: hidden;
    background-image: url('/public/bannerLogin.png');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: end;
    box-shadow: 5px 5px 5px #141414;

    .info {

        bottom: 0;
        left: 0;
        width: 100%;
        height: 50%;
        background-color: #BB2525;
        display: flex;
        flex-direction: row;

        span{
            background-color: #BB2525;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: baseline;
            justify-content: center;
            padding: 10px;
            font-size: 2rem;
            font-weight: bold;
        }
        p{  
            
            color: #EABFBF;
            padding: 10px;
            border-left: 2px solid #EABFBF;
            width: 50%;
            height: 75%;
        }
    }
    
    img {

        height: auto;
        width: 50%;
    }
`