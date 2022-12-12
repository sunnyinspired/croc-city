import React from "react";
import { Col, Row} from "react-bootstrap";
import {Form, FormLabel, FormGroup, } from "react-bootstrap";
import Header from '../components/header';
import Footer from '../components/footer';

const Cargo = () =>{
return(
    <>
    <Header />
    <div className="content">
            <Row>
                <Col md={3}></Col>
                <Col md={6} className="booking-page">
                <Form name="trackCargoForm" method="POST">
                    <div className="form-item">
                    <FormGroup>
                        <FormLabel>Track Your Cargo</FormLabel>
                        <Form.Control type="text"  name="trackingCode" placeholder="Enter Tracking Code" required />
                    </FormGroup>          
                    </div>

                    <FormGroup>
                        <Form.Control type="submit"  name="trackCargo" id="btn-book" value="Proceed"  />
                    </FormGroup>
                </Form>
                </Col>
                <Col md={3}></Col>
            </Row>
    </div>
    <Footer />
    </>
)
}

export default Cargo;