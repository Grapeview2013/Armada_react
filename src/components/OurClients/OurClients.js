import React from 'react'
import './OurClients.css'
import Line1 from '../../assets/images/Line1.png'
import nike_pic from '../../assets/images/nike_pic.png'

export default function OurClients() {
  return (
    <div className='OurClients'>

    <div className='OurClients_name'>
    <img alt='clients_line1' className='clients_line' src = {Line1}/>
    <h2 className='OurClients_title'>Наши клиенты</h2>
    <img alt='clients_line2' className='clients_line' src = {Line1}/>
    </div>

<div className='nikes'>
    <img alt='nikeshoes' className='nikeshoes' src={nike_pic}/>
    <img alt='nikeshoes' className='nikeshoes' src={nike_pic}/>
    <img alt='nikeshoes' className='nikeshoes' src={nike_pic}/>
    <img alt='nikeshoes' className='nikeshoes' src={nike_pic}/>
    <img alt='nikeshoes' className='nikeshoes' src={nike_pic}/>
    <img alt='nikeshoes' className='nikeshoes' src={nike_pic}/>
</div>

    </div>
  )
}
