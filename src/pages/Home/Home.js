import React from 'react'
import Form from '../../components/Form/Form'
import OurTeam from '../../components/OurTeam/OurTeam'
import OurClients from '../../components/OurClients/OurClients'
import OurPrices from '../../components/OurPrices/OurPrices'
import OurProduction from '../../components/OurProduction/OurProduction'
import OurWork from '../../components/OurWork/OurWork'
import OurServices from '../../components/OurServices/OurServices'
import Banner from '../../components/Banner/Banner'
import './Home.css'

export default function Home() {
  return (
    <div>

        <Banner/>
        <OurServices/>
        <OurWork/>
        <OurProduction/>
        <OurPrices/>
        <OurClients/>
        <OurTeam/>
        <Form/>
    </div>
  )
}
