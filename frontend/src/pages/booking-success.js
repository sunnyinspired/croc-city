import React from "react";
import { Col, Row} from "react-bootstrap";
import Header from '../components/header';
import Footer from '../components/footer';
import { Navigate, useLocation, useNavigate} from "react-router-dom";

const BookingSuccess = () =>{
    const location = useLocation();
    const history = useNavigate();
    const data = location.state;
    
    if(data)
    {
return(
    <>
    <Header />
    <div className="content">
            <Row>
                <Col md={1}></Col>
                <Col md={10} className="middle-content">
                    
                    <div className="alert alert-success booking-success">
                    <h1>
                        Booking Successful!
                    </h1>
                    <i className="bi bi-check-circle-fill"></i>
                        <p>Dear Esteemed Customer,</p>
                        <p>Your trip has been successfully booked and we have sent your Ticket to your email.
                        Kindly check your email to confirm.</p>

                        <p>If you need any support, contact us using any of our phone numbers or email.</p>

                        <p>Thank you.</p>
                    </div>
                </Col>
                <Col md={1}></Col>
            </Row>
    </div>
    <Footer />
    </>
)
}
else{ 
return (<Navigate to="/" />) }

}

export default BookingSuccess;