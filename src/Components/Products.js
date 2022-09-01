import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';
import Spinner2 from "../Spinners/Spinner2";

export default function Products() {
    const [data, setdata] = useState([]);

    const getAllProducts = async () => {

        const result = await fetch("/getAllData", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const dt = await result.json();
        console.log(dt);
        setTimeout(() => {
            document.querySelector(".dspl1").style.display = "block";
            document.querySelector(".dspl2").style.display = "none";
            document.querySelector("#rmv").style.height = "";
        }, 2000);

        setdata(dt);
    }

    useEffect(() => {
        return () => {
            getAllProducts();
        }
    }, []);

    return (
        <>
            <div className="d-flex justify-content-center" id='rmv' style={{ height: "100vh" }}>
                <div className='dspl2  align-self-center' >
                    <Spinner2 />
                </div>
            </div>

            <div className="dflex justify-content-center dspl3 mt-5">
                <div className="badge bg-dark">
                    Search Result
                </div>
                <div className="align-self-center">
                    <div className="card mx-2" style={{ width: "18rem" }}>
                        <img src="" className="card-img-top" alt="Not Available" />
                        <div className="card-body">
                            <h5 className="card-title">{ }</h5>
                            <div>
                                <Link to="/pdetails" state={{}} className="btn btn-secondary" style={{ textDecoration: "none" }} >Open</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='dspl1 mt-5' style={{ height: "100vh" }}>
                <div className="badge bg-dark">
                    All Products
                </div>
                <div className='row mt-5 px-5 m-2 d-flex align-items-start'>
                    {data.map((element, i) => {
                        return <ProductList key={i} pname={element.Product_Name} pid={element._id} Image={element.Images.AmazonP} Prices={[element.Prices.AmazonP, element.Prices.FlipkartP]} />
                    })}
                </div>
            </div>
        </>
    )
}
