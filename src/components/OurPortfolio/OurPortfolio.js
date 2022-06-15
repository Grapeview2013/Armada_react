import React from 'react'
import './OurPortfolio.css'
import  portfolio1 from '../../assets/images/portfolio1.png.jpg'
import  portfolio2 from '../../assets/images/portfolio2.png.jpg'
import  portfolio3 from '../../assets/images/portfolio3.png.jpg'
import  portfolio4 from '../../assets/images/portfolio4.png'
import  portfolio5 from '../../assets/images/portfolio4.png'
import  portfolio6 from '../../assets/images/portfolio6.png.jpg'
import  portfolio7 from '../../assets/images/portfolio7.png'



export default function OurPortfolio() {
  return (
    <div  className='OurPortfolio'>
        <div className='OurPortfolio_container'>

<div className='Portfolio1'>
    <img alt='portf1' className='portf1' src={portfolio1}/>
    <img alt='portf2' className='portf2' src={portfolio2}/>
    <img alt='portf3' className='portf3' src={portfolio3}/>
    <img alt='portf4' className='portf4' src={portfolio4}/>
</div>

<div className='Portfolio2'>
<img alt='portf5' className='portf5' src={portfolio5}/>
    <img alt='portf6' className='portf3' src={portfolio3}/>
    <img alt='portf7' className='portf7' src={portfolio6}/>
    <img alt='portf8' className='portf8' src={portfolio7}/>
</div>

        </div>
    </div>
  )
}
