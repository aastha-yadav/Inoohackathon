import React from 'react'
import Navbar from './components/Navbar'
import Page1 from './components/Page1/Page1'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <div className=' h-screen w-full'> 
        <Navbar/>
        <Page1/>
        <Footer/>


      </div>

    </div>
  )
}

export default App