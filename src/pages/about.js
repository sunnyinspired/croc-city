import React from "react";
import { Col, Row} from "react-bootstrap";
import Header from '../components/header';
import Footer from '../components/footer';

const About = () =>{
return(
    <>
    <Header />
    <div className="content">
            <Row>
                <Col md={1}></Col>
                <Col md={10} className="middle-content">
                    <h1>
                        About Us
                    </h1>
                    <p>
                        Croc-City Shuttle is a transport company whoses goal is to provide a safe, swift and 
                        comfortable way to travel and deliver courier across Nigeria.
                    </p>
                    <p>
                        We aim to become Nigeria's leading transport and courier service provider.
                    </p>
                </Col>
                <Col md={1}></Col>
            </Row>
    </div>
    <Footer />
    </>
)
}

export default About;