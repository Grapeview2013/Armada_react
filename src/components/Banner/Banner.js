import React from 'react'
import './Banner.css'
import banner from '../../assets/images/banner.png'
import WhatsApp from '../../assets/icons/WhatsApp.png'
import Instagram from '../../assets/icons/Instagram.png'
import Facebook from '../../assets/icons/Facebook.png'
import Button from '../Button/Button'

export default function Banner() {
  return (
    <div className='banner_container'>
 <div className='banner_img' style={{ backgroundImage: `url(${banner})` }}>
<div className='banner_sections'>
   <div className='banner1'>
       <h1>Наружная  реклама<br/>в Бишкеке<br/></h1>
    <p className='banner_line'>-</p>
    <p className='banner_p'>Произдводство наружной рекламы<br/>и создание проектов под ключ</p>
    {/* <button className='banner_button'>Оставить заявку</button> */}
    <Button text ='Send a message'/>
     </div>
    <div className='banner2'>
    <img alt='whatsapp' src ={WhatsApp}></img>
    <img alt='instagram' src ={Instagram}></img>
    <img alt ='facebook' src ={Facebook}></img>
    </div>
    </div>
    </div>
        {/* <img alt='banner' src ={banner}/> */}
                </div>
  )
}
