import './App.css'
import Navbar from './common/navbar'
import Footer from './common/footer'
import FaqsPage from './pages/faqsPage/faqsPage'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage/homePage'
import AboutUsPage from './pages/nosotrosPage'
import PrivacidadPage from './pages/privacidadPage'
import TerminosPage from './pages/terminosPage'
import RafflesPage from './pages/rifasPage/rafflesPage'
import { createContext, useEffect, useState } from 'react'
import RaffleDetailPage from './pages/raffleDetailPage/raffleDetailPage'

export const ViewWidthContext = createContext(); 
function App() {
    const [viewWidth, setViewWidth] = useState(window.innerWidth); 

    useEffect(() => {
        function handleResize() {
            setViewWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    }); 

    return (
        <>
            <ViewWidthContext.Provider value={{viewWidth, setViewWidth}}>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/faqs" element={<FaqsPage />}></Route>
                    <Route path="/aboutus" element={<AboutUsPage />}></Route>
                    <Route
                        path="/privacidad"
                        element={<PrivacidadPage />}
                    ></Route>
                    <Route path="/terminos" element={<TerminosPage />}></Route>
                    <Route
                        path="/rifas"
                        element={
                            <RafflesPage
                                setSearchButton={(bool) =>
                                    setSearchButton(bool)
                                }
                            />
                        }
                    ></Route>
                    <Route path='/rifa/:id' element={<RaffleDetailPage/>}></Route>
                </Routes>
                <Footer></Footer>
            </ViewWidthContext.Provider>
        </>
    )
}

export default App
