import React, { useState } from "react";
import { Col, Row} from "react-bootstrap";
import Header from '../components/header';
import Footer from '../components/footer';
import { Navigate, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import PaystackPop from '@paystack/inline-js';

const BookingData = () =>{
    const location = useLocation();
    const history = useNavigate();
    const data = location.state;
    
    if(data)
    {
        
        
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const d = new Date(data.trip_date);
        let month = months[d.getMonth()];
        const year = d.getFullYear();
        const day = d.getDate()
        let booking_data_array = [];
        const [bookingContact, setBookingContact] = useState({
            bookingEmail: '',
            bookingPhone: '',
            trip_from: data.trip_from,
            trip_to: data.trip_to,
            trip_date: data.trip_date,
            trip_time: data.trip_time,
            trip_fare: data.total_fare
        })
        const [ref, setRef] = useState('')
        data.seats.map(seat =>{
            let bd = {
                fullname: '',
                age: '',
                sex: '',
                seat_no: '',
                phone:'',
                emergencycontact: '',
                emergencyphone: '',
                trip_id:data.trip_id
            }
            booking_data_array.push(bd)
        })
        const [booking, setBooking] = useState(booking_data_array);

        const handleInputChange = (index, event) =>{
            const values = [...booking];
            const updatedValue = event.target.name;
            values[index][updatedValue] = event.target.value;

            setBooking(values);
        };
        
        //console.log(booking)

        function saveBooking(e){
           
        }

        function handleBookingContact(e){
            setBookingContact({...bookingContact, [e.target.name]:e.target.value})
            console.log(bookingContact);
        }

        async function makePayment(e) {
            e.preventDefault();
            const paystack = new PaystackPop();
           await  paystack.newTransaction({
                key: 'pk_test_beed287d8e712e1eba7a47ae75fde5852d4bcad9',
                email: bookingContact.bookingEmail,
                amount: data.total_fare*100,
                onSuccess(transaction){
                    const msg = transaction.reference
                    setRef(msg)
                    
            axios.post("/api/save-booking", {booking_data:booking,booking_contact:bookingContact,ref_id:msg}).then(res =>{
                history("/booking-success",{
                    state: {
                        bookingSuccess:res.data.bookingSuccess
                        
                    }})
            })
                },
                onCancel(){
                    alert("You have cancelled the transaction")
                }
                
            });
           
        }
        
        return(
            <>
            <Header />
            <div className="content">
                    <Row>
                        <Col md={1}></Col>
                        <Col md={10} className="middle-content">
                            <div className="row alert alert-info trip-schedule2">
                                <div className="col booking-details">
                                    <h4>Booking  Details</h4>
                                    <table className="table">
                                        <tr>
                                            <td>From</td>
                                            <td><span>{data.trip_from}</span></td>
                                        </tr>
                                        <tr>
                                            <td>To</td>
                                            <td><span>{data.trip_to}</span></td>
                                        </tr>
                                        <tr>
                                            <td>Date/Time</td>
                                            <td>
                                                <span>{month} {day}, {year}</span>  <i className="bi-arrow-right"> </i>  
                                                <span>{
                                                        new Date(data.trip_time).getHours() >11 
                                                        ? new Date(data.trip_time).getHours() +':'+ new Date(data.trip_time).getMinutes() + 'PM'
                                                        : new Date(data.trip_time).getHours() +':'+ new Date(data.trip_time).getMinutes() + 'AM'
                                                        }
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Shuttle</td>
                                            <td><span>{data.vehicle_name}</span></td>
                                        </tr>
                                        <tr>
                                            <td>Seat No</td>
                                            <td><span>{data.seats.join(', ')}</span></td>
                                        </tr>
                                        
                                    </table>
                                </div>
                                <div className="col-md-5 booking-data">
                                    <h4>Fare  Details</h4>
                                    <table className="table">
                                        <tr>
                                            <td>Ticket Fare:</td>
                                            <td className="aln-r">
                                                <del className="naira">N</del>
                                                {(data.total_fare).toLocaleString()}
                                            </td>
                                            
                                        </tr>
                                        <tr>
                                            <td>Grand Total:</td>
                                            <td className="aln-r">
                                                <del className="naira">N</del>
                                                {(data.total_fare).toLocaleString()}
                                            </td>
                                        </tr>
                                        <tr style={{'fontWeight':'bold'}}>
                                           <td>Payable Amount:</td>
                                           <td className="aln-r">
                                                   <del className="naira">N</del>
                                               {(data.total_fare).toLocaleString()}
                                           </td>
                                       </tr>
                                   </table>
                               </div>
                            </div>
                            <div className="mt-5 passenger-details">
                                <form>
                                {
                                    data.seats.map((field, index) =>
                                        <div key={index}>
                                            <p className="alert alert-info fw-bold">Passenger {index + 1} Details</p>
                                            <div className="row mb-3">
                                                <div className="col">
                                                    <label htmlFor="fullname">Full Name:</label>
                                                    <input type="text" id="fullname" className="form-control" name="fullname" value={field.fullname} onChange={(event) => handleInputChange(index, event)} />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="phone">Phone:</label>
                                                    <input className="form-control" type="tel" name="phone" id="phone" required placeholder="08012345678" value={field.phone} onChange={(event) => handleInputChange(index, event)} />
                                                </div> 
                                            </div>
                                            <div className="row mb-3">
                                            <div className="col">
                                                    <label htmlFor="seat_no">Seat No:</label>
                                                    <select className="form-select" id="seat_no" name="seat_no" value={field.seat_no} onChange={(event) => handleInputChange(index, event)} required>
                                                        <option></option>
                                                        <option>{field}</option>
                                                    </select>
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="sex">Sex:</label>
                                                    <select className="form-select" id="sex" name="sex" value={field.sex} onChange={(event) => handleInputChange(index, event)} required>
                                                        <option></option>
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                    </select>
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="age">Age:</label>
                                                    <input type="number" id="age" className="form-control" name="age" value={field.age} onChange={(event) => handleInputChange(index, event)} />
                                                </div>  
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col">
                                                    <label htmlFor="emergencyName">Emergency Contact:</label>
                                                    <input className="form-control" type="text" name="emergencycontact" id="emergencyName" required placeholder="Emergency Contact" value={field.emergencycontact} onChange={(event) => handleInputChange(index, event)}/>
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="emergencyPhone">Emergency Phone:</label>
                                                    <input className="form-control" type="tel" name="emergencyphone" id="emergencyPhone" required placeholder="Emergency Phone" value={field.emergencyphone} onChange={(event) => handleInputChange(index, event)} />
                                                </div>  
                                            </div>
                                        </div>
                                    )
                                }
                                <div className="row mb-3">
                                <p className="alert alert-info fw-bold">Booking Contact Details</p>
                                  <div className="col">
                                      <label htmlFor="ebooking-email">Email Address:</label>
                                      <input className="form-control" type="email" name="bookingEmail" id="ebooking-email" required  onChange={handleBookingContact}/>
                                  </div>
                                  <div className="col">
                                      <label htmlFor="booking-phone" className="form-label ">Phone:</label>
                                      <input className="form-control" type="tel" name="bookingPhone" id="booking-phone" required   onChange={handleBookingContact} />
                                  </div>  
                                </div>
                                 <div className="text-center mb-3">
                                        <button className="btn btn-primary" onClick={makePayment}>Proceed to Payment</button>
                                    </div>
                                </form>
                            </div>
                        </Col>
                        <Col md={1}></Col>
                    </Row>
            </div>
            <Footer />
            </>
        ) }
        else{ 
        return (<Navigate to="/booking" />) }

    }

export default BookingData;