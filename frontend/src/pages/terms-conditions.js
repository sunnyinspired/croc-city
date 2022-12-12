import React from "react";
import { Col, Row} from "react-bootstrap";
import Header from '../components/header';
import Footer from '../components/footer';

const TermsConditions = () =>{

return(
    <>
    <Header />
    <div className="content">
            <Row>
                <Col md={1}></Col>
                <Col md={10} className="middle-content">
                <h1 className="alert alert-info text-center">TERMS & CONDITIONS</h1>

                <ol>
                    <li>You are required to produce a copy of your ticket (softcopy/hardcopy) or your booking code at the terminal on the day of travel. Failure to produce this ticket or your booking code means you will not be allowed to proceed on the trip as this serves as official proof of booking.</li>
                    <li>All passengers are required to be at the terminal and checked in at least 15 minutes before departure time.</li>
                    <li>All passengers are entitled to a piece of luggage weighing a maximum of 15kg at no cost. Additional luggage will attract a cost or will be required to be sent via courier service.</li>
                    <li>Drinking Alcohol or Smoking is prohibited while the trip is on. We take the comfort and safety of our passengers as a top priority.</li>
                    <li>The seating arrangement is strictly according to the seat chosen while booking.</li>
                    <li><strong>All tickets are valid for seven (7) days from the date of booking and failure to travel on the due date without due notice will attract a fee of two thousand five hundred naira #2,500</strong></li>
                    <li><strong>All tickets are NOT transferrable and NON-REFUNDABLE</strong></li>
                </ol>
                                    
                </Col>
                <Col md={1}></Col>
            </Row>
    </div>
    <Footer />
    </>
)
}

export default TermsConditions;