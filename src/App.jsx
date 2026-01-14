import React from 'react'
import './App.scss'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import SectionWrap from './components/SectionWrap.jsx'
import WidgetWrap from './components/WidgetWrap.jsx'
import Location from './components/Location.jsx'
import SalesForm from './components/SalesForm.jsx'
import Procedures from './components/Procedures.jsx'

function App() {
  return (
    <>
      <Header className='header'/>
      <Main/>
      <SectionWrap/>
      <WidgetWrap/>
      <Location/>
      <SalesForm/>
      <Procedures/>
    </>
  )
}

export default App
