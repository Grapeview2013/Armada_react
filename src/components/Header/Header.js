import React from 'react'
import './Header.css'
import armada from '../../assets/images/armada.png'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
export default function Header(props) {

  return (
    <div className='Header_Main'>

    <div className='Header1'>
    <div className='Header_motto'>
    <p>Наша сила в вашем успехе !</p> 
    </div> 
    <p>Нужна помощь? Свяжитесь с нашим экспретом</p>
    <div className='Header_phone'>
    <p>+996 (553) 993 342</p>
    </div>
    </div>
    
    <div className='Header2'>
    <Link to="/">
    <img alt='armada_logo' src ={armada} id='Header_logo'/>
</Link>
 <nav>
  <ul className='Header_menu'>
    <li>
    <Link to="/service">Услуги</Link>
    </li>
    <li>
    <Link to="/about">О нас</Link>
    </li>
    <li>
    <Link to="/contacts">Контакты</Link>
</li>
    <li>
    <Link to="/portfolio">Портфолио</Link>
  </li>
    <li> <Link to="/production">Производство</Link>
</li>
  </ul>
  </nav>

<Button text ={props.buttonText}/>
   </div>

    </div>

  )
}
