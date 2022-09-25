import './App.css'
import Navbar from './components/common/navbar'
import Footer from './components/common/footer'
import HomePage from './pages/homePage/homePage'
import FaqsPage from './pages/faqsPage/faqsPage'


function App() {
    return (
        <>
            <Navbar></Navbar>
            {/* <HomePage></HomePage> */}
            <FaqsPage></FaqsPage>
            <Footer></Footer>
        </>
    )
}

export default App
