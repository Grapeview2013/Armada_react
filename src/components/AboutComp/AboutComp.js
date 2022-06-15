import React from 'react'
import Line1 from '../../assets/images/Line1.png'
import './AboutComp.css'

export default function AboutComp() {
  return (
    <div clasName = 'AboutComp'>
    <div className='AboutComp_name'>
                <img alt='comp_line1' className='comp_line' src={Line1} />
                <h2 className='OurServices2_title'>О компании</h2>
                <img alt='comp_line2' className='comp_line' src={Line1} />
            </div>
    <div className = 'AboutComptext'>
    <p className='AboutComp_p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor<br/> rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim<br/> lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa</p>
    </div>
    </div>
  )
}
