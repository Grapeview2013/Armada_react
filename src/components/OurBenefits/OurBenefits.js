import React from 'react'
import './OurBenefits.css'
import Line1 from '../../assets/images/Line1.png'
import clock from '../../assets/images/clock.png'
import book from '../../assets/images/book.png'
import equipment from '../../assets/images/equipment.png'
import task from '../../assets/images/task.png'
export default function OurBenefits() {
  return (
    <div className = 'OurBenefits'>

    <div className='OurBenefits_name'>
                    <img alt='clients_line1' className='clients_line_bene' src={Line1} />
                    <h2 className='OurBenefits_title'>Наши преимущества</h2>
                    <img alt='clients_line2' className='clients_line_bene' src={Line1} />
                </div>

    <div className = 'OB_main'>

    <div className='Benefits_cards'>
    <div className='Benefits_card1'>
    <img alt='clock' className='benefits_icon' src={clock}/>
    <p className='Benefits_card_p'>Оперативность</p>
    </div>
    <div className='Benefits_card2'>
    <img alt='book' className='benefits_icon' src={book}/>
    <p className='Benefits_card_p'>Высококвалифицированные<br/>специалисты</p>
     </div>
    <div className='Benefits_card3'>
    <img alt='equipment' className='benefits_icon' src={equipment}/>
    <p className='Benefits_card_p'>Современное оборудование</p>
    </div>
    <div className='Benefits_card4'>
    <img alt='task' className='benefits_icon' src={task}/>
    <p className='Benefits_card_p'>Широкий спектр услуг</p>
    </div>
    </div>

    </div>

        </div>
  )
}
