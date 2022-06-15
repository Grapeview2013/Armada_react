import React from 'react'
import OurServices from '../../components/OurServices/OurServices'
import OurBenefits from '../../components/OurBenefits/OurBenefits'
import OurClients from '../../components/OurClients/OurClients'
import Banner2 from '../../components/Banner2/Banner2'
import AboutComp from '../../components/AboutComp/AboutComp'
import OurHistory from '../../components/OurHistory/OurHistory'
import './About.css'

export default function About() {
  return (
    <div>
  
         <Banner2/>
         <AboutComp/>
         <OurServices/>
         <OurHistory/>
        <OurBenefits/>
        <OurClients/>

    </div>
  )
}
