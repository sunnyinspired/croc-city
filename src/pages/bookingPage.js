import React from "react";
import { Col, Row} from "react-bootstrap";
import {Form, FormLabel, FormGroup, } from "react-bootstrap";
import Header from '../components/header';
import Footer from '../components/footer';
//import Booking from "../components/bookingtab";
var todayDate = new Date().toISOString().slice(0, 10);
      var date = new Date();
      var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).toISOString().slice(0, 10);
const BookingPage = () =>{
return(
    <>
    <Header />
    <div className="content">
            <Row>
                <Col md={3}></Col>
                <Col md={6} className="booking-page">
                    <Form className="bookingForm" method="POST">
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
                </Col>
                <Col md={3}></Col>
            </Row>
    </div>
    <Footer />
    </>
)
}

export default BookingPage;