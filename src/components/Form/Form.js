import React from 'react'
import './Form.css'
import Button from '../Button/Button'

export default function Form() {
  return (
    <div className='Form'>
      <div className='query'>

<div className='querytitle'>
    <h5 className='query_h5'>Оставьте бесплатную заявку</h5>
    <br/>
    <p className='query_p'>и менеджер по работе с клиентами свяжется с вами и проконсультирует</p>
</div>
<br/>
<br/>
<br/>
<form id="query_form">
<input type="text" id="query_input" placeholder='Ваше Имя'/>
<input type="text" id="query_input" placeholder='Ваш телефон'/>
{/* <button id="queryBtn">Отправить</button> */}
<Button text ='Send'/>
</form>
</div>
    </div>
  )
}
