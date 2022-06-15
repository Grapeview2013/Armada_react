import React from 'react'
import   './OurProduction.css'
import ProductionPic1 from '../../assets/images/ProductionPic1.png'
import ProductionPic2 from '../../assets/images/ProductionPic2.png'
import ProductionPic3 from '../../assets/images/ProductionPic3.png'

export default function OurProduction() {
  return (
    <div className = 'OurProduction'>

<div className ='OurProduction_title'>
 <h2 className='Work_h2'>Производство</h2>
 </div>

    <div className = 'productpic_container'>

    <div className='OurProduction_img'>
    <img alt='product_img1' className='product_pic' src ={ProductionPic1}/>
    </div>

    <div className='OurProduction_img'>
    <img alt='product_img2' className='product_pic' src ={ProductionPic2}/>
    </div>

    <div className='OurProduction_img'>
    <img alt='product_img3' className='product_pic' src ={ProductionPic3}/>
    </div>

</div>

</div>
  )
}
