import React from 'react'
import pricespic1 from '../../assets/images/pricespic1.jpg'
import pricespic2 from '../../assets/images/pricespic2.jpg'
import pricespic3 from '../../assets/images/pricespic3.jpg'
import pricespic4 from '../../assets/images/pricespic4.jpg'
import Button from '../Button/Button'

import './OurPrices.css'

export default function OurPrices() {
    return(

<div className='OurPrices_main'>
<br/>
<br/>
<div className ='OurPrices_title'>
<h2 className='Work_h2'>Наш прайс</h2>
</div>
<br/>
<br/>
<div className = 'ourprices_container1'>

<div className='OurPrices_img'>
<img alt='price_img1' className='prices_pic' src ={pricespic1}/>
<br/>
<br/>
<p className='price_p'>Фасадная вывеска (подсветка<br/> внутреняя, железный короб, флекс)</p>
<br/>
<p className='price_number'>1990 сом</p>
</div>

<div className='OurPrices_img'>
<img alt='prices_img2' className='prices_pic' src ={pricespic2}/>
<br/>
<br/>
<p className='price_p'>Фасадная вывеска (подсветка<br/> внутреняя, железный короб, флекс)</p>
<br/>
<p className='price_number'>1990 сом</p>
</div>

<div className='OurPrices_img'>
<img alt='price_img3' className='prices_pic' src ={pricespic3}/>
<br/>
<br/>
<p className='price_p'>Фасадная вывеска (подсветка<br/> внутреняя, железный короб, флекс)</p>
<br/>
<p className='price_number'>1990 сом</p>
</div>

<div className='OurPrices_img'>
<img alt='price_img4' className='prices_pic' src ={pricespic4}/>
<br/>
<br/>
<p className='price_p'>Фасадная вывеска (подсветка<br/> внутреняя, железный короб, флекс)</p>
<br/>
<p className='price_number'>1990 сом</p>
</div>

</div>

<div className='ourprices_container2'>

<div className='OurPrices_img'>
<img alt='price_img5' className='prices_pic' src ={pricespic1}/>
<br/>
<br/>
<p className='price_p'>Фасадная вывеска (подсветка<br/> внутреняя, железный короб, флекс)</p>
<br/>
<p className='price_number'>1990 сом</p>
</div>

<div className='OurPrices_img'>
<img alt='price_img6' className='prices_pic' src ={pricespic2}/>
<br/>
<br/>
<p className='price_p'>Фасадная вывеска (подсветка<br/> внутреняя, железный короб, флекс)</p>
<br/>
<p className='price_number'>1990 сом</p>
</div>

<div className='OurPrices_img'>
<img alt='price_img3' className='prices_pic' src ={pricespic3}/>
<br/>
<br/>
<p className='price_p'>Фасадная вывеска (подсветка<br/> внутреняя, железный короб, флекс)</p>
<br/>
<p className='price_number'>1990 сом</p>
</div>

<div className='OurPrices_img'>
<img alt='price_img4' className='prices_pic' src ={pricespic4}/>
<br/>
<br/>
<p className='price_p'>Фасадная вывеска (подсветка<br/> внутреняя, железный короб, флекс)</p>
<br/>
<p className='price_number'>1990 сом</p>
</div>

</div>
 {/* <button className='OP_button'>Скачать прайс</button> */}
 <Button text ='Download price list'/>
    </div>
  )
}








