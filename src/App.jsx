import React from 'react'
import './App.css'
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import SectionWrap from './components/SectionWrap.jsx'
import WidgetWrap from './components/WidgetWrap.jsx'
import Location from './components/Location.jsx'
import SalesForm from './components/SalesForm.jsx'
import Procedures from './components/Procedures.jsx'
import Gallery from './components/Gallery.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <HelmetProvider>
        <Header className='header'/>
        <Main/>
        <SectionWrap/>
        <WidgetWrap/>
        <Location/>
        <Procedures/>
        <Gallery/>
        <SalesForm/>
        <Footer/>
      </HelmetProvider>
    </>
  )
}

export default App
