import React from "react";
import { Col, Row} from "react-bootstrap";
import {Form, FormLabel, FormGroup, } from "react-bootstrap";
import Header from '../components/header';
import Footer from '../components/footer';
//import Booking from "../components/bookingtab";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate,} from "react-router-dom";

var todayDate = new Date().toISOString().slice(0, 10);
const BookingPage = () =>{
    const [from, setFrom] = useState([])
    const [to, setTo] = useState([])
    const [data, setData] = useState({
        tripFrom: '',
        tripTo: '',
        departureDate: ''
       })
    const history = useNavigate();

    useEffect(() => {
        axios.get("/api/get-from-routes").then(res =>{
            setFrom(res.data)
        });
    },[])
    
    const getOneRoute = (e) =>{
      //setFromRoute({...fromRoute, [e.target.name]:e.target.value})
      setTo([])
      const fromRoute = {[e.target.name]: e.target.value};
      if(fromRoute !== '')
        {
          //console.log(fromRoute)
        axios.post("/api/get-to-routes", fromRoute).then(res =>{
          setTo(res.data)
          //console.log({todata: res.data})
        });
      }
      else console.log("No from Route Set")
    }
    function setFormData(e){
        e.preventDefault();
        setData({...data, [e.target.name]:e.target.value})
      }

    function sendData(e){
        e.preventDefault()
        history("/trips",{
        state: {
          trip_from: data.tripFrom,
          trip_to: data.tripTo,
          trip_date: data.departureDate
        }})
      }
return(
    <>
    <Header />
    <div className="content">
            <Row>
                <Col md={3}></Col>
                <Col md={6} className="booking-page">
                    <Form className="bookingForm" method="POST" onSubmit={sendData}>
                        <div className="form-item">
                        <FormLabel>Travelling From</FormLabel>
                        <Form.Select aria-label="Default select example" name="tripFrom" required onChange={(e) =>{getOneRoute(e); setFormData(e);}}>
                            <option value="">Choose Departure</option>
                            {
                            from.sort((a,b) => a.route_from > b.route_from ? 1 : -1).map(from =>
                                <option value={from.route_from}>{from.route_from}</option>
                                )
                            }
                        </Form.Select>
                        </div>
                        <div className="form-item">
                        <FormLabel>Travelling To</FormLabel>
                        <Form.Select aria-label="Default select example" name="tripTo" required onChange={setFormData}>
                            <option value="">Choose Destination</option>
                            {
                            to.sort((a,b) => a.route_to > b.route_to ? 1 : -1).map(to =>
                                <option value={to.route_to}>{to.route_to}</option>
                                )
                            }
                        </Form.Select>
                        </div>
                        <div className="form-item">
                            <FormGroup>
                            <FormLabel>Departure Date:</FormLabel>
                            <Form.Control type="date" name="departureDate" id="departureDate" required min={todayDate} onChange={setFormData} />
                            </FormGroup>
                        </div>
                        <br />
                        <div className="form-item">
                            <FormGroup>
                            <Form.Control type="submit"  name="addBooking" id="btn-book" value="Find Trips" />
                            </FormGroup>
                        </div>
                    </Form>
                </Col>
                <Col md={3}></Col>
            </Row>
    </div>
    <Footer />
    </>
)
}

export default BookingPage;