import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='Footer'>

    <div className='footer_container1'>

    </div>

      <div className='footer_container2'>

      <div className='footer1'>
      <h5 className='footer_h5'>О компании</h5>
      <br/>
      <p className = 'footer_p'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit ut aliquam,<br/> purus sit amet luctus venenatis, lectus<br/> magna fringilla urna, porttitor rhoncus<br/> dolor purus non enim</p>
      </div>

    <div className='footer2'>
    <h5 className='footer_h5'>Информация</h5>
    <br/>
    <ul className='footer_info'>
        <li>Услуги</li>
        <li>О нас</li>
        <li>Контакты</li>
        <li>Портфолио</li>
        <li>Производство</li>
    </ul>
       </div>

    <div className='footer3'>
      <h5 className='footer_h5'>Контактная информация</h5>
       <br/>
      <p className = 'footer_p'>Бишкек, ул. Калык Акиева 66,<br/> ТЦ Весна, 3 этаж, офис №37</p>
 
      <p className='footer_p'>+996 (0553) 577-575</p>
      <br/>
     <p className='footer_p'>Email@gmail.com</p>
      </div>

      <div className='footer4'>
      <h5 className='footer_h5'>Мы в социальных сетях</h5>
      <br/>
      <p className = 'footer_p'>Instagram</p>
      <br/>
      <p className='footer_p'>Facebook</p>
      </div>


    </div>
    </div>
  )
}
