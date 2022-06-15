import React from 'react'
import Button from '../Button/Button'
import './OurWork.css'
import ImageListItem from '@mui/material/ImageListItem';
import ImageList from '@mui/material/ImageList';



export default function OurWork(props) {
    return (
      <div className='OurWorkContainer'>

<div className ='OurWork_title'>
<h2 className='Work_h2'>Наши работы</h2>
</div>

<div className='OW_cards_container'>

<div className='OurWork_cards'>
<div className='OurWork_card1'>
<h3 className='OW_card_h31'><br/><br/><br/><br/><br/><br/>Работа на Манаса</h3>
</div>
<div className='OurWork_card2'>
<h3 className='OW_card_h32'><br/><br/><br/><br/><br/><br/>Работа на Манаса</h3>
</div>
<div className='OurWork_card3'>
<h3 className='OW_card_h33'><br/><br/><br/><br/><br/><br/>Работа на Манаса</h3>
</div>
<div className='OurWork_card4'>
<h3 className='OW_card_h34'><br/><br/><br/><br/><br/><br/>Работа на Манаса</h3>
</div>
<div className='OurWork_card5'>
<h3 className='OW_card_h35'><br/><br/><br/><br/><br/><br/>Работа на Манаса</h3>
</div>
<div className='OurWork_card6'>
<h3 className='OW_card_h36'><br/><br/><br/><br/><br/><br/>Работа на Манаса</h3>
</div>
</div>
</div>
<Button text ='See all projects'/>
</div>
  )
}


