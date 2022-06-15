import React from 'react'
import './OurHistory.css'
import left from '../../assets/icons/left.png'
import right from '../../assets/icons/right.png'

export default function OurHistory() {
  return (
    <div className='OurHistory'>

    <div className ='OurHistory_title'>
<h2 className='History_h2'>Наша история</h2>
</div>


<br/>
<br/>
<div className='OurHistory_container'>
<div className ='history_nav1'>
<button className ='history_nav_btn1'><img alt='left' src={left}></img></button>
</div>

<div className = 'date_container'>
<span class="dot"><br/>2015<br/><br/><br/><p className='dot_p'>Lorem ipsum dolor sit<br/> amet, consectetur<br/> adipiscing elit ut aliquam<br/> purus sit</p></span>
<span class="dot"><br/>2016<br/><br/><br/><p className='dot_p'>Lorem ipsum dolor sit<br/> amet, consectetur<br/> adipiscing elit ut aliquam<br/> purus sit</p></span>
<span class="dot"><br/>2017<br/><br/><br/><p className='dot_p'>Lorem ipsum dolor sit<br/> amet, consectetur<br/> adipiscing elit ut aliquam<br/> purus sit</p></span>
<span class="dot"><br/>2018<br/><br/><br/><p className='dot_p'>Lorem ipsum dolor sit<br/> amet, consectetur<br/> adipiscing elit ut aliquam<br/> purus sit</p></span>
<span class="dot"><br/>2019<br/><br/><br/><p className='dot_p'>Lorem ipsum dolor sit<br/> amet, consectetur<br/> adipiscing elit ut aliquam<br/> purus sit</p></span>
<span class="dot"><br/>2020<br/><br/><br/><p className='dot_p'>Lorem ipsum dolor sit<br/> amet, consectetur<br/> adipiscing elit ut aliquam<br/> purus sit</p></span>
</div>

<div className ='history_nav2'>
<button className ='history_nav_btn2'><img alt='left' src={right} className='right'></img></button>
</div>

</div>
<br/>
<div className='history_nav_bottom'>
<div className ='history_nav3'>
<button className ='history_nav_btn3'></button>
<button className ='history_nav_btn3'></button>
<button className ='history_nav_btn4'></button>
</div>
</div>

    </div>
  )
}
