import React from "react";
import { Link } from "react-router-dom";

const SideBar = (user) =>{

    return(
        <>
            
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark position-fixed">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <Link to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Admin Panel</span>
                </Link>

                <Link to="/admin/dashboard" className="d-flex align-items-center text-white text-decoration-none">
                    <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline"> &nbsp;Dashboard</span>
                </Link>

                <hr className="dropdown-divider"/>
 
                <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="booking" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fs-4 bi-card-checklist"></i> <span className="ms-1 d-none d-sm-inline">&nbsp;Booking</span>
                </Link>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="booking">
                        <li><Link className="dropdown-item" to="/admin/add-booking">New Booking</Link></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><Link className="dropdown-item" to="/admin/manage-trips">Manage Bookings</Link></li> 
                    </ul>

                <hr className="dropdown-divider"/>
 
                <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="trips" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fs-4 bi-arrow-left-right"></i> <span className="ms-1 d-none d-sm-inline">&nbsp;Trips</span>
                </Link>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="trips">
                        <li><Link className="dropdown-item" to="/admin/add-route">Add New Route</Link></li>
                        <li><Link className="dropdown-item" to="/admin/add-vehicle">Add New Vehicle</Link></li>
                        <li><Link className="dropdown-item" to="/admin/add-trip">Add New Trip</Link></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><Link className="dropdown-item" to="/admin/manage-trips">Manage All <i className="bi bi-arrow-right"></i></Link></li> 
                         
                    </ul>

                    <hr className="dropdown-divider"/>
                <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="cargo" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fs-4 bi-box2-fill"></i> <span className="ms-1 d-none d-sm-inline">&nbsp;Cargo</span>
                </Link>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="cargo">
                        <li><Link className="dropdown-item" to="/admin/add-cargo">Send New Cargo</Link></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><Link className="dropdown-item" to="/admin/manage-cargo">Manage Cargo</Link></li> 
                    </ul>
                {
                 //Admin & Users 
                }
                <hr className="dropdown-divider"/>
                <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="/admin/admin" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fs-4 bi-person-workspace"></i> <span className="ms-1 d-none d-sm-inline">&nbsp;Staff</span>
                </Link>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="/admin/admin">
                        <li><Link className="dropdown-item" to="/admin/add-staff">Add New Staff</Link></li>
                        <li><Link className="dropdown-item" to="/admin/add-admin">Create User Account</Link></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><Link className="dropdown-item" to="/admin/manage-staff">Manage Staff</Link></li> 
                    </ul>

                <hr className="dropdown-divider"/>
                <Link to="/reports" className="d-flex align-items-center text-white text-decoration-none">
                    <i className="fs-4 bi-file-bar-graph"></i> <span className="ms-1 d-none d-sm-inline">&nbsp;Reports</span>
                </Link>
                    




                
                
                <hr />
                <div className="dropdown pb-4">
                    <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fs-4 bi-person-circle"></i>
                        <span className="d-none d-sm-inline mx-1">User</span>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><Link className="dropdown-item" to="/admin/profile">Profile</Link></li>
                        <li><Link className="dropdown-item" to="/admin/settings">Settings</Link></li>
                        <li><Link className="dropdown-item" to="/admin/security">Password & Security</Link></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><Link className="dropdown-item" to="/admin/logout">Sign out</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        

        </>
    )
}

export default SideBar;