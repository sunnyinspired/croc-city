import React from "react";
import {Form, FormLabel, FormGroup, } from "react-bootstrap";
import SideBar from "../components/sidebar";
//import Booking from "../components/bookingtab";
var todayDate = new Date().toISOString().slice(0, 10);
      var date = new Date();
      var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).toISOString().slice(0, 10);
const AddBooking = () =>{
return(
    <>
    
    <div className="container-fluid">
        <div className="row flex-nowrap">
            <SideBar />
            <div className="col py-5 col-md-6 admin-content">
            <h3 className="text-center">ADD BOOKING</h3>
            <Form name="bookingForm" method="POST" action="/add-booking" className="booking-page">
                        <div className="form-item">
                        <FormLabel>Travelling From</FormLabel>
                        <Form.Select aria-label="Default select example" name="bookingFrom" required>
                            <option value=""></option>
                            <option value="1">Abuja - Jabi</option>
                            <option value="2">Abuja - Zuba</option>
                            <option value="3">Kaduna - Mando</option>
                        </Form.Select>
                        </div>
                        <div className="form-item">
                        <FormLabel>Travelling To</FormLabel>
                        <Form.Select aria-label="Default select example" name="bookingTo" required>
                            <option value=""></option>
                            <option value="1">Abuja - Jabi</option>
                            <option value="2">Abuja - Zuba</option>
                            <option value="3">Kaduna - Mando</option>
                        </Form.Select>
                        </div>
                        <div className="form-item">
                            <FormGroup>
                            <FormLabel>Departure Date:</FormLabel>
                            <Form.Control type="date" name="departureDate" id="departureDate" required min={todayDate} max={lastDay} />
                            </FormGroup>
                        </div>
                        <br />
                        <div className="form-item">
                            <FormGroup>
                            <Form.Control type="submit"  name="addBooking" id="btn-book" value="Proceed" />
                            </FormGroup>
                        </div>
                    </Form>
        </div>
        </div>
        </div> 
    </>
)
}

export default AddBooking