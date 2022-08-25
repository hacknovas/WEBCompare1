import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <Link to="/" style={{ textDecorationLine: "none" }} >WebCompare </Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <div className="container">
                                    <Link to='/admin' style={{ textDecorationLine: "none" }}>Admin</Link>
                                </div>
                                <div className="container">
                                    <Link to='/login' style={{ textDecorationLine: "none" }}>Login</Link>
                                </div>
                                <div className="container">
                                    <Link to='/register' style={{ textDecorationLine: "none" }}>Register</Link>
                                </div>
                                <div className="container">
                                    <Link to='/contactus' style={{ textDecorationLine: "none" }}>contact Us</Link>
                                </div>
                                <div className="container">
                                    <Link to='/logout' style={{ textDecorationLine: "none" }}>Logout</Link>
                                </div>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}
