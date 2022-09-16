import React from 'react';
import { Link } from "react-router-dom";

export default function ProductList(prop) {
    return (
        <>
            <div className="card mx-2 mt-1" style={{ width: "18rem" }}>
                <img src={prop.Image} className="card-img-top" alt="Not Available" style={{ height: "220px" }} />
                <div className="card-body">
                    <h5 className="card-title">{prop.pname}</h5>
                    <div>
                        <Link to="/pdetails" state={{
                            _id: prop.pid, Prices: prop.Prices
                        }} className="btn btn-secondary" style={{ textDecoration: "none" }} >Open</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
