import React from "react";
import { Col, Row} from "react-bootstrap";
import Header from '../components/header';
import Footer from '../components/footer';

const CargoTransport = () =>{
return(
    <>
    <Header />
    <div className="content">
            <Row>
                <Col md={1}></Col>
                <Col md={10} className="middle-content">
                    <h1>
                        Cargo & Parcel Transport
                    </h1>
                </Col>
                <Col md={1}></Col>
            </Row>
    </div>
    <Footer />
    </>
)
}

export default CargoTransport;