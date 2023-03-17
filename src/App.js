
import './App.css';

import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import Navbar from './components/navbar';
import Auth from './components/authantication';
import Footer from './components/footer';

// import ShoppingCart from './components/cart';

function App() {


  return (
    <div className="App">
      <Navbar/>
    <Routes>
     <Route index element={<HomePage/>}/>
     <Route path='/myProfile' element={<Auth/>}/>

      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
