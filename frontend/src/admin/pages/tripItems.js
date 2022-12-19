import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { NavItem } from "react-bootstrap";
import AdminContext from "../components/adminContext";


export function Trips(){
    //const dbTable = 'trip_tbl'
    const [tResponse, setTResponse] = useState([])
    useEffect(() => {
        axios.get("/api/get-trips").then(res =>{
            setTResponse(res.data);
        })
    }, []);
   
    return(
        <>
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>S/N</th>
                        <th>Trip Name</th>
                        <th>Trip Fare</th>
                        <th>Trip Date</th>
                        <th>Trip Vehicle</th>
                        <th>Trip Driver</th>
                        <th>Trip Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            tResponse.map((trip, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{trip.trip_name}</td>
                                    <td>&#x20A6;{Intl.NumberFormat('en-US').format(trip.trip_fare)}</td>
                                    <td>{trip.trip_date}</td>
                                    <td>{trip.vehicle_name}</td>
                                    <td>{trip.driver_name}</td>
                                    <td>{trip.trip_type}</td>
                                    <td>
                                       <i className="bi bi-pencil"></i> &nbsp;
                                        <i className="bi bi-trash btn btn-delete" title="Delete Trip" role="button"
                                            onClick={
                                                () => {
                                                if(window.confirm("Confirm Delete of this Trip?")){
                                                    axios.delete(`/api/delete-trip/${trip.trip_id}`).then(res =>{
                                                    if(res.data.deleted === true){
                                                        alert("Trip Deleted Successfully");
                                                        window.location.reload()
                                                    }})}}}>
                                        </i> &nbsp;
                                        <Link to={`/admin/manifest/${trip.trip_id}`} title="Print Manifest"><i className="bi bi-printer-fill"></i></Link>
                                    </td>
                                </tr>
                            )
                        }
                </tbody>
            </table>
        </>
    )
}



export function GetRoutes(){
    //const dbTable = 'trip_tbl'
    const [tResponse, setTResponse] = useState([])
    useEffect(() => {
        axios.get("/api/get-routes").then(res =>{
            setTResponse(res.data);
        })
    }, [])
    return(
        <>
            <table className="table bordered">
                <thead>
                    <tr>
                        <th>Route ID</th>
                        <th>Route From</th>
                        <th>Route To</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            tResponse.map(route =>
                                <tr key={route.route_id}>
                                    <td>{route.route_id}</td>
                                    <td>{route.route_from}</td>
                                    <td>{route.route_to}</td>
                                    <td>
                                        <i className="bi bi-pencil"></i> &nbsp;&nbsp;&nbsp;
                                        <i className="bi bi-trash"></i>
                                    </td>
                                </tr>
                            )
                        }
                </tbody>
            </table>
        </>
    )
};

export function Vehicles(){
    //const dbTable = 'trip_tbl'
    const [tResponse, setTResponse] = useState([])
    useEffect(() => {
        axios.get("/api/get-vehicles").then(res =>{
            setTResponse(res.data);
        })
    }, [])
    return(
        <>
            <table className="table bordered">
                <thead>
                    <tr>
                        <th>Vehicle ID</th>
                        <th>Vehicle Name</th>
                        <th>Vehicle Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            tResponse.map(vehicle =>
                                <tr key={vehicle.vehicle_id}>
                                    <td>{vehicle.vehicle_id}</td>
                                    <td>{vehicle.vehicle_name}</td>
                                    <td>{vehicle.vehicle_number}</td>
                                    <td>
                                        <i className="bi bi-pencil"></i> &nbsp;&nbsp;&nbsp;
                                        <i className="bi bi-trash"></i>
                                    </td>
                                </tr>
                            )
                        }
                </tbody>
            </table>
        </>
    )
};

export const Manifest = React.forwardRef((trip_id, ref) => {
    const { token } = useContext(AdminContext)
    const [mResponse, setMResponse] = useState([])
    useEffect(() => {
        axios.get(`/api/get-manifest/${trip_id.trip_id}`, {
            headers: {
                "x-access-token": token
            }
        }).then(res =>{
            setMResponse(res.data);
        })
    }, [])

    return(
        <>
        <div ref={ref} className="manifest">
            <div className="row manifest-top mb-2">
                <div className="col-md-2 mb-2">
                    <img src="/images/logo.png" alt="logo" />
                </div>
                <div className="col-md-8 mb-2">
                    <h3>Croc-City Shuttle Manifest</h3>
                </div>
                <div className="col-md-4 manifest-address">
                <b>Head Office</b>: GF 06 Mathis Plaza, Patrick Yakowa Express Way, Kaduna, Kaduna State.
                </div>
                <div className="col-md-4 manifest-address">
                <b>Abuja Office</b>: Suite 104/98 Befs Plaza 21 Ajose Adeogun Street, Utako FCT Abuja.
                </div>
                <div className="col-md-4 manifest-address">
                    <b>Contact</b>: 08149604664, 09024308501.<br />
                    <b>Website</b>:www.croc-cityshuttle.com <br />
                    <b>Email</b>: info@croc-cityshuttle.com
                </div>
            </div>
            <div className="row manifest-header">
                <div className="col-md-3">
                    Departure: <b>{ mResponse.map((x, index) =>  
                        index === 0 ? x.trip_from : ''
                    ) }
                    </b>
                </div>
                <div className="col-md-3">
                    Destination: <b>{ mResponse.map((x, index) =>  
                        index === 0 ? x.trip_to : ''
                    ) }
                    </b>
                </div>
                <div className="col-md-3">
                    Date: <b>{ mResponse.map((x, index) =>  
                        index === 0 ? x.trip_date : ''
                    ) }
                    </b>
                </div>
                <div className="col-md-3">
                    Driver: <b>{ mResponse.map((x, index) =>  
                        index === 0 ? x.driver_name : ''
                    ) }
                    </b>
                </div>
            </div>

            
            <table className="table table-bordered caption-top mt-3 adult-manifest">
                <caption className="manifest-caption">PASSENGER DETAILS</caption>
                <thead className="table-dark">
                    <tr>
                        <th>S/N</th>
                        <th>Passenger</th>
                        <th>Sex</th>
                        <th>Age</th>
                        <th>Phone No.</th>
                        <th>Emergency Contact</th>
                        <th>Emergency Phone</th>
                        <th>Seat No.</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            mResponse.map((data, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data.passenger_name}</td>
                                    <td>{data.passenger_sex}</td>
                                    <td>{data.passenger_age}</td>
                                    <td>{data.passenger_phone}</td>
                                    <td>{data.emergency_contact}</td>
                                    <td>{data.emergency_phone}</td>
                                    <td>{data.booking_seat}</td>
                                </tr>
                            )
                        }
                </tbody>
                
            </table>
            <table className="table table-bordered caption-top mt-3 infant-manifest">
                <caption className="manifest-caption">Infants / Children (0 - 5 Years)</caption>
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Name</th>
                        <th>Mother/Father Name</th>
                    </tr>
                </thead>
                <tbody>
                {
                   mResponse.slice(0,3).map((data, index) =>
                       <tr key={index}>
                           <td>{index + 1}</td>
                           <td></td>
                           <td></td>
                       </tr>
                   )
                }
                
                </tbody>
            </table>
            <div className="manifest-signature">
                _____________________________<br />
                Authorized Signature
            </div>
        </div>
        </>
    )
});
