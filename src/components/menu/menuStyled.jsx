import styled from "styled-components";

export const MenuStyled = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;

    grid-column: 2 / -2;
    grid-row: 1 / 2;
    
    .profile{
        display: flex;
        flex-direction: row;
        background-color: #cccfdd;
        height: 100%;
        width: 30%;
        border-radius: 16px;
        box-shadow: 5px 0px 7px -5px #262626;
        img{
            height: auto;
            width: 90px;
            box-shadow: 5px 0px 7px -5px #262626;
            border: 1px solid #141E46;
            border-radius: 5px;
        }
    }
    .menu{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        background-color: #141E46;
        width: 100%;
        padding: 7px;

       
        border-radius: 16px;
        ul{
            display: flex;
            flex-direction: row;
            margin-right: 50px;
           
            li{ 
                list-style: none;
                height: 100%;
                a{  
                    padding: 30px 30px 0px 30px;
                    color: #F2F4FF;
                    text-decoration: none;
                }
                a:hover{  
                    padding: 30px 30px 0px 30px;
                    background-color: #bbc0d14f;
                    border-bottom: 7px solid #bbc0d1;
                }
            }
        }
    }
`