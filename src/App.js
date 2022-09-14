import './App.css';
import Navbar from './components/common/navbar';
import Footer from './components/common/footer';
import HomePage from './pages/homePage'; 


function App() {
  return (
    <>
      <Navbar></Navbar>
      <HomePage></HomePage>  
      <Footer></Footer>
    </>
  )
}

export default App;
