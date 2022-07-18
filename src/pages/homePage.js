import React from "react";
import { Button, Col, Form, Row} from "react-bootstrap"
import Booking from "../components/bookingtab";
import Header from '../components/header';
import Footer from '../components/footer';

const Homepage = () =>{
return(
    <>
    <Header />
    <div className="home-1st align-self-center">
            <Row>
            <Col md={6} className="home-1st-text">
                <h1>
                Croc-City: The safe, swift and comfortable way to travel and deliver courier across Nigeria
                </h1>
                <p>
                we aim to become Nigeria's
                leading transport and courier service provider.
                </p>

            </Col>
            <Col md={1}></Col>
            <Col md={5} className="home-1st-booking">
                <Booking />

            </Col>
            </Row>
            
    </div>
    <div className="travel">
            <Row>
                <Col md={5} className="travel-text align-self-center">
                    <h1>Travel Safe with Style & Comfort</h1>
                    <p>
                        - courtesy of our Fast, Reliable and Hitch-free Trips
                    </p>
                </Col>
                <Col md={7} className="travel-photo">
                    <div className="p1"></div>
                    <div className="p2"></div>
                    <div className="p3"></div>
                </Col>
            </Row>
    </div>
    <div className="travel">
            <Row>
                <Col md={7} className="pay-photo">
                    <img className="photo1" alt="card payment" src="./images/cardpayment.jpg"/>
                    <img className="photo2" alt="card payment" src="./images/phone.jpg"/>
                </Col>
                <Col md={5} className="travel-text align-self-center">
                    <h1>Pay for your Trips Online</h1>
                    <p>
                        - swift & secured payment powered by PayStack
                    </p>
                </Col>
            </Row>
    </div>
    <div className="home-cargo">
            <Row>
                <Col md={12} className="travel-text text-center">
                    <h3>Let us handle your cargo & parcel transport. We deliver fast and intact!</h3>
                </Col>
                <Col md={4} className="cargo-photos">
                    <img src="./images/cargo2.jpg" alt="cargo1" />
                </Col>
                <Col md={4} className="cargo-photos">
                <img src="./images/cargo1.jpg" alt="cargo1" />
                </Col>
                <Col md={4} className="cargo-photos">
                <img src="./images/cargo3.jpg" alt="cargo1" />
                </Col>
            </Row>
    </div>

    <div className="subscribe">
            <Row>
                <Col md={6} className="subscribe-text">
                    <p>
                        Stay updated with our latest offers, promos and new features.
                    </p>
                </Col>
                <Col md={6} className="subscribe-form">
                    <Form name="subscribeForm" action="#" method="POST">
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Control type="email" name="subscriber_email" required placeholder="Enter Email" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Button  className="btn-subscribe">Subscribe</Button>
                            </Form.Group>
                        </Row>
                    </Form>
                </Col>
            </Row>
    </div>
    <Footer />
    </>
)
}

export default Homepage;