import React from "react";
import { Col, Row} from "react-bootstrap";
import Header from '../components/header';
import Footer from '../components/footer';

const ErrorPage = () =>{
return(
    <>
    <Header />
    <div className="content">
            <Row>
                <Col md={3}></Col>
                <Col md={6} xs={12} className="four-0-four">
                    <img src="./images/404.png" alt="404 Error" />
                </Col>
                <Col md={3}></Col>
            </Row>
    </div>
    <Footer />
    </>
)
}

export default ErrorPage;