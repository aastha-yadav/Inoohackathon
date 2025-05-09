import React from 'react'
import Navbar from './components/Navbar'
import CancerChoiceForm from './components/CancerChoiceForm'
import Question from './components/Question'

const App = () => {
  return (
    <div>
      <div className=' h-screen w-full'> 
        <Navbar/>
        <CancerChoiceForm/>
        <Question/>


      </div>

    </div>
  )
}

export default App