import React from "react";
import { Col, Row} from "react-bootstrap";
import Header from '../components/header';
import Footer from '../components/footer';

const Contact = () =>{
return(
    <>
    <Header />
    <div className="content">
            <Row>
                <Col md={1}></Col>
                <Col md={10} className="middle-content">
                    <h1>
                        Contact Us
                    </h1>
                    <p>
                    <i className="bi-geo-alt-fill"></i>&nbsp;
                        Head Office: No. 2, Sabon-Tasha, Mando, Kaduna, Kaduna State.
                    </p>

                    <p>
                    <i className="bi-telephone-fill"></i>&nbsp;
                        (+234) 08027643043, 08051300974
                    </p>

                    <p>
                    <i className="bi-envelope-fill"></i>&nbsp;
                        info@croc-city.com
                    </p>
                </Col>
                <Col md={1}></Col>
            </Row>
    </div>
    <Footer />
    </>
)
}

export default Contact;