import './App.css';
import Navbar from './component/navbar';
import Contact from "./component/contact/index";
import Index from './component/index';
import Footer from './component/footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter className="App">
    <Navbar/>
    <Routes>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/' element={<Index/>} />
    </Routes>
    <Footer/>
  
    
  
  
  
    </BrowserRouter>
  

  );
}

export default App;
