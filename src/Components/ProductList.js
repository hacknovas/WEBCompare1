import React from 'react';
import { Link } from "react-router-dom";

export default function ProductList(prop) {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={prop.Image} className="card-img-top" alt="Not Available" />
                <div className="card-body">
                    <h5 className="card-title">{prop.pname}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/pdetails" state={{
                        Product_Name:prop.pname,
                        Image:prop.Image,
                        Prices:{AmazonP:prop.Price[0],
                        FlipkartP:prop.Price[1]},
                        Ratings:{AmazonP:prop.Rating[0],FlipkartP:prop.Rating[1]},
                        Links:{AmazonP:prop.Links[0],FlipkartP:prop.Links[1]},
                        _id:prop.pid
                        }}  >Go Here</Link>
                </div>
            </div>
        </>
    )
}
