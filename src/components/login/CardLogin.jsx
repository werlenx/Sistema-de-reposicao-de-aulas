import styled from 'styled-components'

export const CardLogin = styled.div`
    background-color: #141E46;
    width: 80vw;
    height: 40vw;
    margin: 60px auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 2.5em;
    box-shadow: 5px 5px 8px #888888;
    .banner{
        height: 100%;
        width: 50%;
        background-image: url('../../../public/bannerLogin.png');
        background-size: cover;
        background-position: center;
        border-top-left-radius: 2.5em;
        border-bottom-left-radius: 2.5em;
    }
    .form{
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        width: 50%;
    }
    img{
        margin: 40px;
    }
    form{
        width: 50%;
        font-size: 1.2rem;
    }
    label{
        
    }
`;
