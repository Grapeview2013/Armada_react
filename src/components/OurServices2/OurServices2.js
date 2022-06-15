import React from 'react'
import './OurServices2.css'
import Line1 from '../../assets/images/Line1.png'

export default function OurServices2() {
  return (

    <div className = 'OurServices2'>
<br/>
<div className='OurServices2_name'>
                <img alt='clients_line1' className='clients_line_serv' src={Line1} />
                <h2 className='OurServices2_title'>Наши услуги</h2>
                <img alt='clients_line2' className='clients_line_serv' src={Line1} />
            </div>
<br/>
<br/>
<br/>

<div className = 'OS_main'>

    <div className = 'OS_container1'>
    <div className = 'OS_card1'>
    <h3 className='OS_card_h31'><br/><br/><br/><br/><br/><br/><br/>Монтажная<br/>установка</h3>
    </div>
    <div className = 'OS_card2'>
    <h3 className='OS_card_h31'><br/><br/><br/><br/><br/><br/><br/><br/>Самоклейка</h3>
    </div>
    <div className = 'OS_card3'>
    <h3 className='OS_card_h31'><br/><br/><br/><br/><br/><br/><br/><br/>Буклеты</h3>
    </div>
    <div className = 'OS_card4'>
    <h3 className='OS_card_h31'><br/><br/><br/><br/><br/><br/><br/><br/>Визитки</h3>
    </div>
    <div className = 'OS_card5'>
    <h3 className='OS_card_h31'><br/><br/><br/><br/><br/><br/><br/><br/>Вывески</h3>
    </div>
    </div>

    <div className = 'OS_container2'>
    <div className = 'OS_card6'>
    <h3 className='OS_card_h33'><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>Банеры</h3>
    </div>
    <div className = 'OS_card7'>
    <h3 className='OS_card_h34'><br/><br/><br/><br/><br/><br/><br/><br/>Листовки</h3>
    </div>
    </div>
    
</div>

    </div>
  )
}
