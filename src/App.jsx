
import './App.css'
import Header from './components/Header/Header'
import Wrapper from './components/flip cards/Wrapper'
import Footer from "./components/footer/Footer"
import Varieties from "./components/Categories/Varieties"
import NewArrival from './components/new arival/NewArrival'
import Announcements from './components/Announcements/Announcements'
function App() {

  return (
   <>
   <Header/>
   <NewArrival/>
   <Varieties/>
   <Announcements/>
    <Wrapper/>
    
    <Footer/>
   </>
  )
}

export default App
