import React, { useState } from "react";
import { Col, Row} from "react-bootstrap";
import Header from '../components/header';
import Footer from '../components/footer';
import { Navigate, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const SearchTrips = () =>{
    const location = useLocation();
    const history = useNavigate()
    
    if(location.state)
    {
        //const searchTerm = location.state;
        const [searchTerm, setSearchTerm] = useState({
            trip_from: location.state.trip_from,
            trip_to: location.state.trip_to,
            trip_date: location.state.trip_date
        });
        const [searchData, setSearchData] = useState([]);
        const [seatData, setSeatData] = useState([]);
        const [selectedSeats, setSelectedSeats] = useState([]);
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const d = new Date(searchTerm.trip_date);
        let month = months[d.getMonth()];
        const year = d.getFullYear();
        const day = d.getDate()
        let photo = 'uploads/vehicle_photos/';
        
        
        
        useEffect(() =>
        {
                axios.post("/api/get-trips", searchTerm).then(res =>{
                setSearchData(res.data);
                });

        },[searchTerm]);


        function getSeats(e){
            setSelectedSeats([])
            let tripID = e.target.value;
            //console.log("This is the Trip ID: "+tripID)
            axios.get(`/api/get-trip-seats/${tripID}`).then(response =>{
                setSeatData(response.data);
            })
        }

        //let filteredSeats = [];
        
        function getSelectedSeats(e){
            //let filteredSeatsData = searchData.find(trip => trip.trip_id == seatData[0].trip_id);
            const index = selectedSeats.indexOf(e.target.value);
            if(e.target.checked && index < 0){
                setSelectedSeats(selectedSeats => [...selectedSeats, e.target.value]);
            }
            else if(e.target.checked ==false && index > -1){
                const ss = selectedSeats.slice()
                ss.splice(index, 1);
                //setSelectedSeats([]);
                setSelectedSeats(ss)
            }
            
        }
        


        function sendData(e){
            const filteredSeatsData = searchData.find(trip => trip.trip_id == seatData[0].trip_id);
            e.preventDefault()
            history("/trip-data",{
            state: {
                trip_id: filteredSeatsData.trip_id,
                trip_from: location.state.trip_from,
                trip_to: location.state.trip_to,
                trip_date: location.state.trip_date,
                trip_time: filteredSeatsData.trip_time,
                seats: selectedSeats,
                total_fare: filteredSeatsData.trip_fare * selectedSeats.length,
                vehicle_name: filteredSeatsData.vehicle_name
                
            }})
          }
        
        
        return(
            <>
            <Header />
            <div className="content">
                    <Row>
                        <Col md={1}></Col>
                        <Col md={10} className="middle-content">
                            <div className="alert alert-info trip-schedule">
                                Trip Schedule: from <span>{location.state.trip_from}</span>
                                to <span>{location.state.trip_to} </span>
                                on <span>{month}  {day}, {year}</span>
                            </div>
                            <div className="trip-details">
                                <div className="table-purple">
                                        <div className="trip-items">Shuttle Photo</div>
                                        <div className="trip-items">Shuttle Name</div>
                                        <div className="trip-items">Schedule</div>
                                        <div className="trip-items d-none d-sm-block">Fare</div>
                                        <div className="trip-items d-none d-sm-block">Seats Available</div>
                                        <div className="trip-items">View</div>
                                </div>
                                <div className="accordion accordion-flush" id="accordionExample">
                                        {
                                            
                                            searchData.length > 0 ? searchData.map((data, index) =>
                                            <>
                                            <div key={index} className="accordion-item trip-item-details">
                                                <div className="trip-items"><img src={photo+data.vehicle_photo} alt="vehicle photo" className="vehicle_photo" /></div>
                                                <div className="trip-items">{data.vehicle_name}</div>
                                                <div className="trip-items">
                                                    {
                                                    new Date(data.trip_time).getHours() >11 
                                                    ? new Date(data.trip_time).getHours() +':'+ new Date(data.trip_time).getMinutes() + 'PM'
                                                    : new Date(data.trip_time).getHours() +':'+ new Date(data.trip_time).getMinutes() + 'AM'
                                                    }
                                                    </div>
                                                <div className="trip-items d-none d-sm-block"><del className="naira">N</del>{(data.trip_fare).toLocaleString()}</div>
                                                <div className="trip-items d-none d-sm-block">{data.available_seats}/{data.trip_seats}</div>
                                                <div className="trip-items">
                                                    <button className="btn" id="btn-view-seats" data-bs-toggle="collapse" data-bs-target={"#collapse"+index} aria-expanded="true" aria-controls={"collapse"+index} onClick={getSeats} value={data.trip_id}>View Seats</button>
                                                </div>
                                            </div>
                                            <div id={"collapse"+index} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="row accordion-body view-seats">
                                                    <div className="col-md-5 col-xs-3 available-seats">
                                                        <div className="row">
                                                        <b style={{'padding':'2%', 'backgroundColor':'purple', 'marginBottom':'2%', 'color':'white'}}>{data.available_seats} Seats Available</b>
                                                        {
                                                            
                                                            seatData.length > 0 ? seatData.map((seats, index) => {
                                                                if(data.trip_id === seats.trip_id){
                                                                    return(
                                                                        <div className="col-2 seats" key={index}>
                                                                            <input type="checkbox" name={seats.trip_seat_id} id={"seats"+seats.trip_seat_id + seats.seat_no} value={seats.seat_no} onClick={getSelectedSeats} />
                                                                            <label htmlFor={"seats"+seats.trip_seat_id + seats.seat_no}>{seats.seat_no}</label>
                                                                        </div>
                                                                    )
                                                                }
                                                            }
                                                            )

                                                            
                                                            :<div className="alert alert-danger">
                                                                No Seats Available
                                                            </div>
                                                        }
                                                        </div>
                                                    </div>
                                                    <div className="col-md-1"></div>
                                                    <div className="col-md-5 booking-data">
                                                        <p>
                                                            <center><b><u>BOOKING SUMMARY</u></b></center>
                                                        </p>
                                                        <table className="table">
                                                            <tr>
                                                                <td>Seats:</td>
                                                                <td className="aln-r">{selectedSeats.join(', ')}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Ticket Fare:</td>
                                                                <td className="aln-r">
                                                                    <del className="naira">N</del>
                                                                    {(data.trip_fare * selectedSeats.length).toLocaleString()}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Grand Total:</td>
                                                                <td className="aln-r">
                                                                    <del className="naira">N</del>
                                                                    {(data.trip_fare * selectedSeats.length).toLocaleString()}
                                                                </td>
                                                            </tr>
                                                            <tr style={{'fontWeight':'bold'}}>
                                                                <td>Payable Amount:</td>
                                                                <td className="aln-r">
                                                                        <del className="naira">N</del>
                                                                    {(data.trip_fare * selectedSeats.length).toLocaleString()}
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <p className="aln-r">
                                                        <button className="btn btn-primary" onClick={sendData}>Proceed</button>
                                                    </p>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            </>
                                            )
                                            : 
                                                    <div className="alert alert-warning trip-schedule">
                                                            Sorry, We Don't Have Any Trips from 
                                                            <span>{location.state.trip_from}</span>
                                                            to <span>{location.state.trip_to} </span>
                                                            on <span>{month}  {day}, {year}</span>
                                                            <p>
                                                                Kindly Check Other Dates.
                                                            </p>
                                                    </div>
        
                                        }
                                    </div>
                                    <div className="table-purple2"></div>
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

export default SearchTrips;