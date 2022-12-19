import React, { useContext, useState } from 'react';
import Homepage from './pages/homePage';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import BookingPage from './pages/bookingPage';
import ErrorPage from './pages/errorPage';
import ScrollToTop from './components/scrolltotop';
import Cargo from './pages/cargo';
import Terminal from './pages/terminals';
import Travels from './pages/interstate-travel';
import CargoTransport from './pages/cargo-transport';
import About from './pages/about';
import Contact from './pages/contact';
import Dashboard from './admin/pages/dashboard';
import AdminLogin from './admin/pages/adminlogin';
import AddRoute from './admin/pages/addroute';
import AddBooking from './admin/pages/addBooking';
import AddStaff from './admin/pages/addStaff';
import AddVehicle from './admin/pages/addVehicle';
import AddTrip from './admin/pages/addTrip';
import ManageTrips from './admin/pages/manageTrips';
import SearchTrips from './pages/searchTrips';
import BookingData from './pages/bookingData';
import BookingSuccess from './pages/booking-success';
import PrivacyPolicy from './pages/privacy-policy';
import TermsConditions from './pages/terms-conditions';
import AddAdmin from './admin/pages/addAdmin';
import PrintManifest from './admin/pages/manifest';
import AdminContext, { AdminContextProvider } from './admin/components/adminContext';
import { SignOut } from './admin/pages/signOut';

function App() {
  const { user } = useContext(AdminContext);
  
  return (
    <>
      <ScrollToTop>
        
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/booking' element={<BookingPage />} />
          <Route path='/cargo' element={<Cargo />} />
          <Route path='/terminals' element={<Terminal />} />
          <Route path='/interstate' element={<Travels />} />
          <Route path='/cargo-transport' element={<CargoTransport />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/trips' element={<SearchTrips />} />
          <Route path='/trip-data' element={<BookingData />} />
          <Route path='/booking-success' element={<BookingSuccess />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/terms-and-conditions' element={<TermsConditions />} />
        </Routes>

        
        
       
          {user ? 
          <Routes>
            <Route path='/admin/' element={<AdminLogin />} />
          <Route path='/admin/logout' element={<SignOut />} />
            <Route path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/add-route' element={<AddRoute/>} />
            <Route path='/admin/add-booking' element={<AddBooking/>} />
            <Route path='/admin/add-staff' element={<AddStaff/>} />
            <Route path='/admin/add-vehicle' element={<AddVehicle/>} />
            <Route path='/admin/add-trip' element={<AddTrip/>} />
            <Route path='/admin/manage-trips' element={<ManageTrips/>} />
            <Route path='/admin/add-admin' element={<AddAdmin/>} />
            <Route path='/admin/manifest/:tripID' element={<PrintManifest/>} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
          :
          <AdminLogin />
          }
      
      </ScrollToTop>
    </>
  );
}

export default App;
