import { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`
    *{
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;1,100&display=swap');
        margin: 0;
        padding: 0;
        align-items: center;
        box-sizing: border-box;
        font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    body {
        color: #F2F4FF;
        background-color: #FFF5E0;
    }
    
`