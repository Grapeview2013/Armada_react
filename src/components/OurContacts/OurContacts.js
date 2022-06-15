import React from 'react'
import './OurContacts.css'
import clock from '../../assets/images/clock.png'
import Phone from '../../assets/images/Phone.png'
import address from '../../assets/images/address.png'
import map from '../../assets/images/map.png'

export default function OurContacts() {
  return (

    <div className='OurContacts'>

<div className='OurContacts_main'>
    <div className='OurContacts_container'>

<h2 className='OurContacts_h2'><br/>Контакты</h2>

    <div clasName = 'OurContacts_info1'>

<div className='hours'><img alt='contacts_clock' className='contacts_clock' src={clock}/>

<h5 class='hours_h5'>Режим работы</h5>
</div>
<br/>
<div className='rest2'>
<p className='info1_p'>c 10:00 до 20:00</p>
<br/>
<p className='info1_p'>Сб, Вс - выходной.</p>
</div>
</div>

<br/>
    <div clasName = 'OurContacts_info2'>
<div className='phone'><img alt ='contacts_phone' src = {Phone}/>
<h5 className='phone_h5'>Телефон</h5>
</div>
<br/>
<div className='rest2'>
<p className='info2_p'>+996 (0553) 577-575, +996 (0773) 577-575</p>
</div>
    </div>
<br/>
    <div clasName = 'OurContacts_info3'>
<div className='address'><img alt ='contacts_address' src = {address}/>
<h5 className='address_h5'>Адрес</h5>
</div>
<br/>
<div className='rest3'>
<p className='info3_p'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit ut aliquam</p>
</div>
    </div>

    </div>

    <div className='OurContacts_map'>
    <br/>
    <br/>
    <img alt ='contacts_map' src = {map}/>

    </div>
    
</div>
    </div>
  )
}
