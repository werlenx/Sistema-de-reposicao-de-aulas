import React from 'react'
import {FooterStyled } from '../footer/footerStyled';

const Footer = () =>{
  return (
    <FooterStyled>
      <div>
        <p>&copy; 2024 Werlen Araujo</p>
      </div>
      <div>
        <ul>
          <li><a href="https://github.com/werlenx">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/werlen-araujo/">LinkedIn</a></li>
          <li><a href="https://www.instagram.com/werlenx/">Instagram</a></li>
        </ul>
      </div>
    </FooterStyled>
  )
}
export default Footer