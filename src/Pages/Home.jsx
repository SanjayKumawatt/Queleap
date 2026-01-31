import React from 'react'
import Hero from '../Components/Hero'
import Features from '../Components/Features'
import Suite from '../Components/Suit'
import Integrations from '../Components/Integrations'
import Problem from '../Components/Problem'
import Solution from '../Components/Solution'
import Products from '../Components/Products'
import Platform from '../Components/Platform'
import WhoWeServe from '../Components/WhoWeServe'
import Personas from '../Components/Personas'
import Contact from '../Components/Contact'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <Suite/>
        <Integrations/>
        <Problem/>
        <Solution/>
        <Products/>
        <Platform/>
        <WhoWeServe/>
        <Personas/>
        <Contact/>
    </div>
  )
}

export default Home