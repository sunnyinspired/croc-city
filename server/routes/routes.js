require('dotenv').config()
const express = require('express')
const multer = require('multer')
const con = require('../config/dbconfig')
const verifyToken = require('../middlewares/verifyToken')
const randomstr = require('randomstring')
const sendBookingMail = require('../mailing/bookingTicket')
const {Login, AuthenticatedUser, RefreshToken, Logout} = require('../controllers/auth.controller')


const routes = express.Router()
const dateCreated = new Date();
const saltRound = 10;


const storage = multer.diskStorage({
    destination: (req, file, callback) =>{
        callback(null,  "./frontend/public/uploads/staff_photos")
    },
    filename: (req, file, callback) =>{
        callback(null, Date.now()+file.originalname)
    }
});

const vehiclePhoto = multer.diskStorage({
    destination: (req, file, callback) =>{
        callback(null,  "./frontend/public/uploads/vehicle_photos")
    },
    filename: (req, file, callback) =>{
        callback(null, Date.now()+file.originalname)
    }
})

const upload = multer({storage:storage}).single("photo");
const vPhotoUpload = multer({storage:vehiclePhoto}).single("vehiclePhoto");

//LOGIN
routes.post('/login', Login);
routes.get('/authUser', AuthenticatedUser);
routes.get('/get-token', RefreshToken);
routes.post('/logout', Logout);


routes.get('/dashboard', verifyToken, (req, res) =>{
    res.json({message: 'Hello, Welcome to the Croc-City Shuttle Admin Section!'});
});


routes.post('/get-user', verifyToken, (req, res, next) => {
    con.query("SELECT * FROM `admin_users` WHERE admin_id = ?", [req.body.admin_id], (err, results) =>{
        if(err){
            res.json({error: "Error Looking up Admin"})
        }
        else{
            res.json({adminData: results})
        }
    })
})


//GET ALL DEPARTMENTS
routes.get("/get-departments", (req, res) =>{
    con.query("SELECT * FROM `departments_tbl`", (err, results)=>{
        if(err){
            res.json({error: "Failed to Load Departments"})
        }
        else{
            res.json({dept: results})
        }
    })
});


//GET ALL POSITIONS
routes.get("/get-positions", (req, res) =>{
    con.query("SELECT * FROM `position_tbl`", (err, results)=>{
        if(err){
            res.json({error: "Failed to Load Positions"})
        }
        else{
            res.json({positions: results})
        }
    })
});

//ADD NEW STAFF
routes.post("/add-staff", upload, (req, res) => {
    //console.log(req.body)
        var firstName = req.body.firstName
        //let middleName = req.body.middleName
        let lastName = req.body.lastName
        let dob = req.body.dob
        let sex  = req.body.sex
        let lga = req.body.lga
        let state = req.body.state
        let address = req.body.address
        let email = req.body.email
        let phone = req.body.phone
        let dept = req.body.dept
        let pos = req.body.pos
       // var photo = req.file.filename
        if(!req.file)
        {
            res.json({server_message:"Error! No File Received! ",class_name:"alert alert-danger alert-dismissible fade show"})
        }
        else{

            const sql = `INSERT INTO staff_tbl(first_name, last_name, sex, birth_date, lga_origin, 
                state_origin, address, email, phone_number,department, position, photo, date_created)
                VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)`;
            con.query(sql, [firstName, lastName, sex, dob, lga, state, address, email, phone, dept, pos, req.file.filename], 
                (err, results) =>{
                if(err){
                    res.json({server_message:"Error! Failed to Add Staff!! "+err,class_name:"alert alert-danger alert-dismissible fade show"})
                }
                else{
                    res.json({server_message:"Staff Added Successfully!", class_name:"alert alert-success alert-dismissible fade show"})
                }
            })
        }
})

//ADD NEW ROUTE
routes.post("/add-route", (req, res) => {
    con.query("INSERT INTO `routes_tbl`(route_from, route_to) VALUES(?,?)", [req.body.routeFrom, req.body.routeTo],
    (err, results) =>{
        if(err) res.json({server_message:"Error! Failed to Add Route "+err,class_name:"alert alert-danger mt-3 alert-dismissible fade show"});
        else {
            con.query("INSERT INTO `routes_tbl`(route_from, route_to) VALUES(?,?)", [req.body.routeTo, req.body.routeFrom])
            res.json({server_message:"Route Added Successfully!", class_name:"alert alert-success mt-3 alert-dismissible fade show"});
        }
    })
})

//GET FROM-ROUTES
routes.get("/get-from-routes", (req, res) =>{
    con.query("SELECT DISTINCT(route_from) FROM `routes_tbl`", (err, result) =>{
        if(err) res.json({server_message:"Error! Failed to Get Routes! "+err,class_name:"alert alert-danger alert-dismissible fade show"});
        else res.json(result)
    })
});

//GET TO-ROUTES
routes.post("/get-to-routes", (req, res) =>{
    con.query("SELECT route_to FROM `routes_tbl` WHERE `route_from` =?", [req.body.tripFrom], 
    (err, result) =>{
        if(err) res.json({server_message:"Error! Failed to Get Route! "+err});
        else res.json(result)
    })
});


//ADD VEHICLE
routes.post("/add-vehicle", vPhotoUpload, (req, res) => {
    //console.log(req.body)
        var vehicleName = req.body.vehicleName
        //let middleName = req.body.middleName
        let vehicleNumber = req.body.vehicleNumber
        let vehicleType = req.body.vehicleType
        let brandModel = req.body.brandModel
        let chasisNo = req.body.chasisNo
        let plateNo = req.body.plateNo
        let category = req.body.category
        let noOfSeats = req.body.noOfSeats
        let vehicleColor = req.body.vehicleColor
        let condition = req.body.condition
        //let date_added = new Date();

        console.log(req.body);
        if(!req.file)
        {
            res.json({server_message:"Error! No File Received! ",class_name:"alert alert-danger"})
        }
        else{
            const sql = `INSERT INTO vehicle_tbl(vehicle_name, vehicle_number, vehicle_type, brand_model, chasis_no, 
                plate_no, category, no_of_seats, vehicle_color, vehicle_condition, vehicle_photo, date_added)
                VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?)`;
            con.query(sql, [vehicleName, vehicleNumber, vehicleType, brandModel, chasisNo, plateNo, category, noOfSeats, vehicleColor, condition, req.file.filename, dateCreated], 
                (err, results) =>{
                if(err){
                    res.json({server_message:"Error! Failed to Add Vehicle! "+err,class_name:"alert alert-danger alert-dismissible fade show"})
                }
                else{
                    res.json({server_message:"Vehicle Added Successfully!", class_name:"alert alert-success alert-dismissible fade show"})
                }
            })
        }
});

//GET ALL VEHICLES
routes.get("/get-vehicles", (req, res) =>{
    con.query("SELECT vehicle_id, vehicle_name, vehicle_number, no_of_seats FROM `vehicle_tbl`", (err, result) =>{
        if(err) res.json({server_message:"Error! Failed to Get Vehicles! "+err,class_name:"alert alert-danger alert-dismissible fade show"});
        else res.json(result)
    })
});

//GET ALL DRIVERS
routes.get("/get-drivers", (req, res) =>{
    con.query("SELECT staff_id as driver_id, CONCAT(first_name, ' ', last_name) AS driver_name FROM `staff_tbl` WHERE `department` = '4'", 
    (err, result) =>{
        if(err) res.json({server_message:"Error! Failed to Load Drivers! "+err});
        else res.json(result)
    })
});

//ADD NEW TRIP ROUTE
routes.post("/add-trip", (req, res) =>{    
    //console.log(req.body)
    let tripFrom = req.body.tripFrom
    let tripTo = req.body.tripTo
    let tripFare = req.body.tripFare
    let tripDate = req.body.tripDate
    let tripVehicle = req.body.tripVehicle
    let tripDriver = req.body.tripDriver
    let noOfSeats = Number(req.body.noOfSeats)
    let tripType = req.body.tripType

    const sql = `INSERT INTO trip_tbl(trip_from, trip_to, trip_fare, trip_date, trip_vehicle, trip_driver, trip_type, date_created)
    VALUES(?, ?, ?, ?, ?, ?, ?, ?)`;
    const sql2 = `INSERT INTO trip_seats_tbl(trip_id, vehicle_id, seat_no, date_created)
    VALUES(?, ?, ?, ?)`;
    con.query(sql, [tripFrom, tripTo, tripFare, tripDate, tripVehicle, tripDriver, tripType, dateCreated], (err, result) =>{
       
        if(err){
            res.json({server_message:"Error! Failed to Add Trip! "+err,class_name:"mt-5 alert alert-danger alert-dismissible fade show"})
        }
        else{
            if(tripType === "passenger")
            {
                const lastID = result.insertId;
                let count = 0;
                for(let seat =1; seat<=noOfSeats; seat++){
                    con.query(sql2, [lastID, tripVehicle, seat, dateCreated], (err, result) =>{
                        if(err) res.json({server_message:"Error! Failed to Add Trip! "+err,class_name:"mt-5 alert alert-danger alert-dismissible fade show"})
                    });
                }
                res.json({server_message:"Passenger Trip Added Successfully!", class_name:"mt-5 alert alert-success alert-dismissible fade show"})
            }
            else{
                res.json({server_message:"Cargo Trip Added Successfully!", class_name:"mt-5 alert alert-success alert-dismissible fade show"})
            }
        }

    })
});


//GET ALL TRIPS
routes.get("/get-trips", (req, res) =>{
    let sql = `SELECT trip_id, concat(trip_from, ' to ', trip_to) as trip_name, trip_fare, 
    DATE_FORMAT(trip_date, "%d-%m-%Y %h:%m")as trip_date, v.vehicle_name as vehicle_name, 
    concat(staff.first_name, " ", staff.last_name) AS driver_name, trip_type
     FROM trip_tbl trip
     JOIN staff_tbl staff on trip.trip_driver = staff.staff_id
     JOIN vehicle_tbl v on v.vehicle_id = trip.trip_vehicle
     ORDER BY trip_id DESC` ;

    con.query(sql, (err, result) =>{
        if(err) 
        {
            res.json({server_message:"Error! Failed to Get Trip! "+err,class_name:"alert alert-danger"})
        }
        else {
            res.json(result)
        }
    })
});

//SEARCH FOR AVAILABLE TRIPS
routes.post("/get-trips", (req, res) =>{
    let sql = `SELECT v.vehicle_name as vehicle_name, v.vehicle_photo as vehicle_photo,
    v.no_of_seats as trip_seats, t.trip_id as trip_id, t.trip_vehicle as vehicle_id, t.trip_fare as trip_fare, t.trip_date as trip_time,
    (SELECT COUNT(tst.trip_id) FROM trip_seats_tbl tst  WHERE tst.trip_id = t.trip_id AND tst.isbooked=0) as available_seats
    FROM trip_tbl t
    JOIN vehicle_tbl v ON v.vehicle_id = t.trip_vehicle 
    WHERE t.trip_from =?  AND t.trip_to =? AND DATE(t.trip_date) =? AND t.trip_started !=1 AND 
    (SELECT COUNT(tst.trip_id) FROM trip_seats_tbl tst  WHERE tst.trip_id = t.trip_id AND tst.isbooked=0)>0`
    con.query(sql,[req.body.trip_from, req.body.trip_to, req.body.trip_date], 
    (err, result) =>{
        if(err) res.json({server_message:"Error! Failed to Get Trips! "+err});
        else res.json(result)
    })
});

//GET TRIP SEATS
routes.get("/get-trip-seats/:id", (req, res) =>{
    //console.log(req.params.id)
    let sql = `SELECT * FROM trip_seats_tbl WHERE trip_id =? AND isbooked=0`
    con.query(sql,[req.params.id], 
    (err, result) =>{
        if(err) res.json({server_message:"Error! Failed to Get Trip Seats! "+err});
        else res.json(result)
    })
});

//GET ALL ROUTES
routes.get("/get-routes", (req, res) =>{
    con.query("SELECT *  FROM `routes_tbl`",(err, result) =>{
        if(err) res.json({server_message:"Error! Failed to Get Routes! "+err});
        else res.json(result)
    })
});

//SAVE BOOKING
routes.post("/save-booking", (req, res) =>{    
    //console.log(req.body)
    const booking_data = req.body.booking_data;
    const no_of_customers = booking_data.length;
    const ref_id = req.body.ref_id;
    const booking_contact = req.body.booking_contact;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date(booking_contact.trip_date);
    let month = months[d.getMonth()];
    const year = d.getFullYear();
    const day = d.getDate()
    const Trip_Date = month + ' ' + day + ', ' + year;
    const Trip_Time =  new Date(booking_contact.trip_time).getHours() >11 
        ? new Date(booking_contact.trip_time).getHours() +':'+ new Date(booking_contact.trip_time).getMinutes() + 'PM'
        : new Date(booking_contact.trip_time).getHours() +':'+ new Date(booking_contact.trip_time).getMinutes() + 'AM';

    const Trip_Fare = booking_contact.trip_fare;

    const insertUser = `INSERT INTO users_tbl(email, phone)
    VALUES(?, ?)`;
    
    const insertBooking = `INSERT INTO booking_tbl(booking_code, passenger_name, passenger_phone, passenger_sex, passenger_age, emergency_contact, emergency_phone, trip_id, booking_seat, booking_status, booking_date, booking_type, payment_id, booked_by)
    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const updateSeatStatus = `UPDATE trip_seats_tbl SET isbooked = 1 WHERE trip_id = ? AND seat_no = ?`;
    
 con.query(insertUser, [booking_contact.bookingEmail, booking_contact.bookingPhone], (err, results) =>{
     if(err){
         console.log("Failed to Submit Contact Details "+err)
     }
     else{
         booking_data.map(async (booking, index) =>{
             const bookingCode = randomstr.generate(10).toLocaleUpperCase()
             const lastId = results.insertId;
             con.query(insertBooking, 
                 [bookingCode, booking.fullname, booking.phone, booking.sex, booking.age, booking.emergencycontact, booking.emergencyphone, booking.trip_id, booking.seat_no, 1, dateCreated, "Online", ref_id, lastId]
                 ,(err, result) =>{
                     if(err){
                         console.log("Failed to Submit Booking "+err)
                     }
                     else{
                        con.query(updateSeatStatus, [booking.trip_id, booking.seat_no], (err, result) =>{
                            if(err){
                                console.log("Failed to Update Seat Status "+err)
                            }
                            else{
                                sendBookingMail(booking.fullname, bookingCode, booking_contact.bookingEmail, booking_contact.trip_from, booking_contact.trip_to, Trip_Date, Trip_Time, booking.seat_no, no_of_customers, Trip_Fare)
                            }
                        })
                     }
                 });
             });
     }
 })

res.json({bookingSuccess:true})

});

//GET ALL STAFF
routes.get("/get-staff", (req, res) =>{
    const getStaff = `SELECT staff_id, CONCAT(first_name, ' ', last_name) as staff_name, email FROM staff_tbl`;
    con.query(getStaff, (err, data) =>{
        if(err){
            console.log("Failed to Select Staff " + err)
        }
        else{
            res.json(data)
        }
    })
});

//GET ALL ROLES
routes.get("/get-roles", (req, res) =>{
    con.query('SELECT * FROM admin_roles_tbl', (err, data) =>{
        if(err){
            console.log("Failed to Select Roles " + err)
        }
        else{
            res.json(data)
        }
    })
});

//ADD NEW ADMIN ACCOUNT
routes.post("/add-admin", async (req, res) =>{
    const user_data = req.body;
    const hashedPWD = await bcrypt.hash(user_data.password, saltRound);
    const addAdmin = `INSERT INTO admin_users_tbl(staff_id, username, email, password, role_id)
                    VALUES(?, ?, ?, ?, ?)`;
    con.query(addAdmin, [user_data.staff_id, user_data.username, user_data.email, hashedPWD, user_data.role], (err, data) =>{
        if(err){
            res.json({server_message:"Error! Failed to Add User Account! "+err,class_name:"alert alert-danger alert-dismissible fade show"})
        }
        else{
            res.json({server_message:"User Account Added Successfully!", class_name:"alert alert-success alert-dismissible fade show"})
        }
    })
})

//GET BOOKING FOR MANIFEST
routes.get("/get-manifest/:trip_id", verifyToken,  (req, res) =>{
    let getManifest = `SELECT b.passenger_name, b.passenger_sex, b.passenger_age, b.passenger_phone, b.emergency_contact, b.emergency_phone, b.booking_seat,
    t.trip_from, t.trip_to, DATE_FORMAT(t.trip_date, "%d/%m/%Y") as trip_date, DATE_FORMAT(t.trip_date, "%h-%m") as trip_time,
    v.vehicle_name, CONCAT(s.first_name, ' ', s.last_name) as driver_name
    FROM booking_tbl b
    JOIN trip_tbl t ON b.trip_id = t.trip_id
    JOIN vehicle_tbl v ON v.vehicle_id = t.trip_vehicle
    JOIN staff_tbl s ON s.staff_id = t.trip_driver
    WHERE t.trip_id =?`

    con.query(getManifest,[req.params.trip_id], 
    (err, result) =>{
        if(err) res.json({server_message:"Error! Failed to Get Manifest Details! "+err});
        else res.json(result)
    })
});

//DELETE TRIP
routes.delete("/delete-trip/:trip_id", (req, res) =>{
    let deleteTrip = `DELETE from trip_tbl WHERE trip_id =?`
    let deleteTripSeats = `DELETE from trip_seats_tbl WHERE trip_id =?`

    con.query(deleteTrip,[req.params.trip_id], 
    (err, result) =>{
        if(err) res.json({server_message:"Error! Failed to Delete Trip "+err});
        else{
          con.query(deleteTripSeats, [req.params.trip_id], (err, result) =>{
            if(err) res.json({server_message:"Error! Failed to Delete Trip "+err});
          });
          res.json({deleted:true}) 
        }
    })
});

module.exports = routes;