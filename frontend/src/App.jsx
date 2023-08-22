import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import AddProject from './Pages/AddProject'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'
import Resume from './Pages/Resume'
import { FcUp } from 'react-icons/fc'
import './css/app.css'

function App() {
  const [showButton, setShowButton] = useState()
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 10 ? setShowButton(true) : setShowButton(false);

    };
    window.addEventListener('scroll', handleScrollButtonVisibility);
    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisibility)
    }
  }, [])


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/addproject$subodh' element={<AddProject />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
      {
        showButton && (
          <div className={`scrollToTop`}>
            <button className='topscroll' onClick={handleScrollToTop}>
              <h1> <FcUp /></h1>
            </button>
          </div>
        )
      }
    </BrowserRouter>
  )
}
export default App

