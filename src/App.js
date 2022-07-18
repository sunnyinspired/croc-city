import React from 'react';
import Header from './components/header';
import Homepage from './pages/homePage';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import BookingPage from './pages/bookingPage';
import ErrorPage from './pages/errorPage';
import Footer from './components/footer';
import ScrollToTop from './components/scrolltotop';
import Cargo from './pages/cargo';
import Terminal from './pages/terminals';
import Travels from './pages/interstate-travel';
import CargoTransport from './pages/cargo-transport';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/booking' element={<BookingPage />} />
        <Route path='/cargo' element={<Cargo />} />
        <Route path='/terminals' element={<Terminal />} />
        <Route path='/interstate' element={<Travels />} />
        <Route path='/cargo-transport' element={<CargoTransport />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
      </ScrollToTop>
    </Router>
    </>
  );
}

export default App;
