import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Tab, Tabs, Form, FormLabel, FormGroup, } from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Booking = () =>{
       const [key, setKey] = useState('booking');
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
      var todayDate = new Date().toISOString().slice(0, 10);

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
        trip_date: data.departureDate,
      }})
    }


  return (
  <>
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      variant="pill"
    >
      <Tab eventKey="booking" title="Book a Seat">
        <Form className="bookingForm" method="post" onSubmit={sendData}>
          <div className="form-item">
          <FormLabel>Travelling From</FormLabel>
          <Form.Select aria-label="Default select example" name="tripFrom" required onChange={(e) => {getOneRoute(e); setFormData(e);}}>
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
              <Form.Control type="submit" name="addBooking" id="btn-book"  onClick={sendData} value="Find Trips" />
            </FormGroup>
          </div>
        </Form>
      </Tab>
      <Tab eventKey="bookingStatusForm" title="Check Booking">
        <Form name="checkBooking" method="POST">
          <div className="form-item">
            <FormGroup>
              <FormLabel>Check Your Booking Status</FormLabel>
              <Form.Control type="text" id="code-input" name="bookingCode" placeholder="Enter Booking Code" required />
            </FormGroup>          
          </div>

          <FormGroup>
              <Form.Control type="submit"  name="checkBooking" id="btn-book" value="Proceed"  />
            </FormGroup>
        </Form>
      </Tab>
      <Tab eventKey="track" title="Track Cargo">
        <Form name="trackCargoForm" method="POST">
            <div className="form-item">
              <FormGroup>
                <FormLabel>Track Your Cargo</FormLabel>
                <Form.Control type="text" id="code-input" name="trackingCode" placeholder="Enter Tracking Code" required />
              </FormGroup>          
            </div>

            <FormGroup>
                <Form.Control type="submit"  name="trackCargo" id="btn-book" value="Proceed"  />
              </FormGroup>
          </Form>
      </Tab>
    </Tabs>
  </>
    )
}

export default Booking;