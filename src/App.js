import { useState, useEffect } from 'react'

import Header from './components/Header'
import Welcome from './components/Welcome'
import Features from './components/Features'
import CallAction from './components/CallAction'
import Footer from './components/Footer'

function App() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)
  window.addEventListener('resize', () => { setViewportWidth(window.innerWidth) })

  const [isInBigScreen, setIsInBigScreen] = useState(false) 
  useEffect(() => {
      if (viewportWidth >= 1280) {
          setIsInBigScreen(true)
      } else {
          setIsInBigScreen(false)
      }
  }, [viewportWidth])
  
  return (
    <div className="App font-poppins">
      <Header isInBigScreen={isInBigScreen} />
      <Welcome />
      <Features isInBigScreen={isInBigScreen} />
      <CallAction />
      <Footer isInBigScreen={isInBigScreen} />
    </div>
  );
}

export default App
