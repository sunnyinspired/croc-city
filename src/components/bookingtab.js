import React from "react";
import { useState } from "react";
import { Tab, Tabs, Form, FormLabel, FormGroup, } from "react-bootstrap";
const Booking = () =>{
       const [key, setKey] = useState('booking');
      var todayDate = new Date().toISOString().slice(0, 10);
      var date = new Date();
      var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).toISOString().slice(0, 10);
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
        <Form className="bookingForm" method="POST">
          <div className="form-item">
          <FormLabel>Travelling From</FormLabel>
          <Form.Select aria-label="Default select example" name="bookingFrom" required>
            <option value=""></option>
            <option value="1">Abuja - Jabi</option>
            <option value="2">Abuja - Zuba</option>
            <option value="3">Kaduna - Mando</option>
          </Form.Select>
          </div>
          <div className="form-item">
          <FormLabel>Travelling To</FormLabel>
          <Form.Select aria-label="Default select example" name="bookingTo" required>
            <option value=""></option>
            <option value="1">Abuja - Jabi</option>
            <option value="2">Abuja - Zuba</option>
            <option value="3">Kaduna - Mando</option>
          </Form.Select>
          </div>
          <div className="form-item">
            <FormGroup>
              <FormLabel>Departure Date:</FormLabel>
              <Form.Control type="date" name="departureDate" id="departureDate" required min={todayDate} max={lastDay} />
            </FormGroup>
          </div>
          <br />
          <div className="form-item">
            <FormGroup>
              <Form.Control type="submit"  name="addBooking" id="btn-book" value="Proceed" />
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