import React from 'react'
import {MenuStyled} from './menuStyled'

export default function Menu() {
  return (
    <MenuStyled>
        <div className='menu'>
            <div className='profile'>
                <img src="/public/acdff4c18161a3e6e112f8e1effd2a8d.jpeg" alt="" />
                <div className='info'>
                    Prof: werlen
                    
                </div>
            </div>
            <ul>
                <li>
                    <a href="#">link 01</a>
                </li>
                <li>
                    <a href="#">link 01</a>
                </li>
                <li>
                    <a href="#">link 01</a>
                </li>
            </ul>
        </div>
        
    </MenuStyled>
  )
}
