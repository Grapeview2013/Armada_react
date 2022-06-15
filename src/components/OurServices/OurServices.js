import React from 'react'
import './OurServices.css'
import ServicesCard1 from '../../assets/icons/ServicesCard1.png'
import ServicesCard2 from '../../assets/icons/ServicesCard2.png'
import ServicesCard3 from '../../assets/icons/ServicesCard3.png'
import ServicesCard4 from '../../assets/icons/ServicesCard4.png'

export default function OurServices() {
  return (
    <div className='Services'>

    <div className ='Services_title'>
    <h2 className='Services_h3'>Наши услуги</h2>
    </div>

    <div className='Services_cards'>
    <div className='Services_card1'>
    <img alt='completed project' className='services_icon' src={ServicesCard1}/>  
    <h4 className='Services_card_h5'>Конструкция<br/>под ключ</h4>
    <p className='Services_card_p'>Хотите узнать подробности<br/>телефон для связи:<br/><br/><br/><br/><br/></p>
    <p className='Services_phone'>+996 (0553) 577-575</p>
    </div>
    <div className='Services_card2'>
    <img alt='completed project' className='services_icon' src={ServicesCard2}/> 
    <h4 className='Services_card_h5'>Вывески,<br/>объемные буквы</h4>
    <p className='Services_card_p'>Хотите узнать подробности<br/>телефон для связи:<br/><br/><br/><br/><br/></p>
    <p className='Services_phone'>+996 (0553) 577-575</p>
     </div>
    <div className='Services_card3'>
    <img alt='completed project' className='services_icon' src={ServicesCard3}/>
    <h4 className='Services_card_h5'>Визитки, буклеты,<br/>полиграфия</h4>
    <p className='Services_card_p'>Хотите узнать подробности<br/>телефон для связи:<br/><br/><br/><br/><br/></p>
    <p className='Services_phone'>+996 (0553) 577-575</p>
    </div>
    <div className='Services_card4'>
    <img alt='completed project' className='services_icon' src={ServicesCard4}/>
    <h4 className='Services_card_h5'>Банеры, самоклейка,<br/>монтажная установка </h4>
    <p className='Services_card_p'>Хотите узнать подробности<br/>телефон для связи:<br/><br/><br/><br/><br/></p>
    <p className='Services_phone'>+996 (0553) 577-575</p>
    </div>
    </div>

    </div>
  )
}
