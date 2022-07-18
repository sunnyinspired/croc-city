import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row} from "react-bootstrap";

const Contact = () =>{
return(
    <>
    <div className="content">
            <Row>
                <Col md={1}></Col>
                <Col md={10} className="middle-content">
                    <h1>
                        Contact Us
                    </h1>
                    <p>
                        <FontAwesomeIcon icon={faLocationDot} />&nbsp;
                        Head Office: No. 2, Sabon-Tasha, Mando, Kaduna, Kaduna State.
                    </p>

                    <p>
                        <FontAwesomeIcon icon={faPhone} />&nbsp;
                        (+234) 08027643043, 08051300974
                    </p>

                    <p>
                        <FontAwesomeIcon icon={faEnvelope} />&nbsp;
                        info@croccity.com
                    </p>
                </Col>
                <Col md={1}></Col>
            </Row>
    </div>
    </>
)
}

export default Contact;