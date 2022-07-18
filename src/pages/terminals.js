import React from "react";
import { Col, Row} from "react-bootstrap";

const Terminal = () =>{
return(
    <>
    <div className="content">
            <Row>
                <Col md={1}></Col>
                <Col md={10} className="middle-content">
                    <h1>
                        Our Terminals
                    </h1>
                </Col>
                <Col md={1}></Col>
            </Row>
    </div>
    </>
)
}

export default Terminal;