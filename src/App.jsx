import './App.scss'
import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Catolog from './components/Catolog/Catolog'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Catolog/>
      <Footer/>
    </>
  )
}

export default App