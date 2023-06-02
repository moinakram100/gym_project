import './App.css';
import Home from './home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pricing from './component/pricing';
import Navbar from './component/navbar';
import Footer from './component/footer';
import Services from './component/services';
import Trainer from './component/trainer';
import Contact from './component/contact';
import Join from './component/join';
import ErrorPage from './error';

function App() {
  return (

    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/service' element={<Services />} />
        <Route path='/about' element={<Trainer />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/join' element={<Join />} />
        <Route path='/*' element={<ErrorPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
