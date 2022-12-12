import React from "react";
import SideBar from "../components/sidebar";
import axios from "axios";
import { useState , useEffect} from "react";

const AddTrip = () =>{
    const [trip, setTrip] = useState({
        tripFrom: '',
        tripTo: '',
        tripFare: '',
        tripDate: '',
        tripVehicle: '',
        tripDriver: '',
        noOfSeats: '',
        tripType: ''
    })
    const [response, setResponse] = useState([])
    const [from, setFrom] = useState([])
    const [to, setTo] = useState([])
    const [vehicle, setVehicle] = useState([])
    const [driver, setDriver] = useState([])
    const [seat, setSeat] = useState('')
    const [display, setDisplay] = useState('d-none')

    useEffect(() => {
        axios.get("/api/get-from-routes").then(res =>{
            setFrom(res.data)
        });

        axios.get("/api/get-vehicles").then(res =>{
            setVehicle(res.data)
        });

        axios.get("/api/get-drivers").then(res =>{
            setDriver(res.data)
        });
    },[],[],[])
    
    const getOneRoute = (e) =>{
      //setFromRoute({...fromRoute, [e.target.name]:e.target.value})
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

    const setValues = (e) =>{
        setTrip({...trip, [e.target.name]:e.target.value})
        //console.log(trip)
    }

    function getSeatNo(e){
        if(e.target.value !== '')
        {
            const seatNo = vehicle.find((v) => v.vehicle_id === +e.target.value);
            setSeat(seatNo.no_of_seats)
            //console.log(seatNo)
        }
        else{
            setSeat('')
        }
    }

    function addTrip(e){
        setResponse('')
        e.preventDefault()
        axios.post("/api/add-trip", trip).then(res =>{
            setDisplay('btn-close')
            setResponse(res.data)
        })
    }
    return(
        <>
        <div className="container-fluid">
        <div className="row flex-nowrap">
            <SideBar />
            <div className="col py-5 col-md-7 admin-content">
            <h3 className="text-center text-dark home-1st-text">ADD TRIP</h3>
            <hr />
            <form className="form"  method="POST" onSubmit={addTrip} >
                <div className="row">
                    <div className="col">
                        <b>Trip From:</b>
                        <select className="form-select" name="tripFrom" required onChange={(e) =>{getOneRoute(e); setValues(e);}}>
                        <option value="">Choose Departure</option>
                                {
                                from.sort((a,b) => a.route_from > b.route_from ? 1 : -1).map(from =>
                                    <option value={from.route_from} key={to.route_to}>{from.route_from}</option>
                                    )
                                }
                        </select>
                    </div>

                    <div className="col">
                        <b>Trip To:</b>
                        <select className="form-select" name="tripTo" required onChange={setValues}>
                            <option value="">Choose Destination</option>
                                {
                                to.sort((a,b) => a.route_to > b.route_to ? 1 : -1).map(to =>
                                    <option value={to.route_to} key={to.route_to}>{to.route_to}</option>
                                    )
                                }
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="col mt-3">
                        <b>Trip Fare (&#x20A6;):</b>
                        <input type="number" className="form-control" name="tripFare" onChange={setValues} required />
                    </div>

                    <div className="col mt-3">
                        <b>Trip Date & Time:</b>
                        <input type="datetime-local" className="form-control" name="tripDate" onChange={setValues} required min={new Date().toISOString().slice(0, 10)} />

                    </div>
                </div>
            
                <div className="row">
                <div className="col mt-3">
                        <b>Trip Vehicle:</b>
                        <select className="form-select" name="tripVehicle" required onChange={(e) => {setValues(e); getSeatNo(e);}}>
                            <option value="">Select Vehicle</option>
                                {
                                vehicle.sort((a,b) => a.vehicle_name > b.vehicle_name ? 1 : -1).map(vehicle =>
                                    <option value={vehicle.vehicle_id}>{vehicle.vehicle_name} ({vehicle.vehicle_number})</option>
                                    )
                                }
                        </select>
                        
                    </div>
                    
                    <div className="col mt-3">
                        <b>Vehicle No of seats:</b>
                        <select className="form-select" name="noOfSeats" required onChange={setValues}>
                        <option value=""></option>
                            <option value={seat}>{seat}</option>
                                
                        </select>
                        
                    </div>
                   
                </div>
                <div className="row">
                    <div className="col mt-3">
                        <b>Trip Driver:</b>
                        <select className="form-select" name="tripDriver" required onChange={setValues}>
                        <option value="">Select Driver</option>
                                {
                                driver.sort((a,b) => a.driver.driver_name > b.driver.driver_name ? 1 : -1).map(driver =>
                                    <option value={driver.driver_id}>{driver.driver_name}</option>
                                    )
                                }
                        </select>       
                    </div>
                    <div className="col mt-3">
                        <b>Trip Type:</b>
                        <select className="form-select" name="tripType" required onChange={setValues}>
                        <option value=""></option>
                        <option value="cargo">Cargo</option>
                        <option value="passenger">Passenger</option>
                                
                        </select>       
                    </div>
                </div>
                <div className="mt-3">
                    <input type="submit" className="btn btn-primary btn-Add" value="Add Trip" />
                </div>
            </form>
            <div className={response.class_name} role="alert">
            <button type="button" class={display} data-bs-dismiss="alert" aria-label="Close"></button>
                    <h4> {response.server_message}</h4>
            </div>
        </div>
        </div>
        </div> 
        </>
    )
}

export default AddTrip;