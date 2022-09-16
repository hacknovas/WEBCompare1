import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';
import Spinner2 from "../Spinners/Spinner2";
import "../cssElem/PCat.css"

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

    const getSeperateData = async (temp) => {

        document.querySelector(".dspl1").style.display = "none";
        document.querySelector(".dspl2").style.display = "block";
        document.querySelector("#rmv").style.height = "100vh";


        const result = await fetch("/getSeperateData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: temp
            })
        });

        setTimeout(() => {
            document.querySelector(".dspl1").style.display = "block";
            document.querySelector(".dspl2").style.display = "none";
            document.querySelector("#rmv").style.height = "";
        }, 1000);

        const dt = await result.json();

        setdata(dt);

    }

    return (
        <>
            <div>
                <div className="row">
                    <div className="container col-2" >
                        <div className="Menu">
                            <div href="#" className="links selected btn-dark text-center">Category</div>
                            <Link to="/product" style={{ textDecoration: "none" }}><div className="links btn " onClick={() => { window.location.reload(false) }}>ALL</div></Link>
                            <div className="links btn" onClick={() => { getSeperateData("Mobile") }}>Mobiles</div>
                            <div className="links btn" onClick={() => { getSeperateData("Electronics") }} >Electronics</div>
                            <div className="links btn" onClick={() => { getSeperateData("Fashion") }}>Fashion</div>
                        </div>
                    </div>

                    <div className="container col-10 gdis">

                        <div className="d-flex justify-content-center" id='rmv' style={{ height: "100vh" }}>
                            <div className='dspl2  align-self-center' >
                                <Spinner2 />
                            </div>
                        </div>

                        <div className="dflex dspl3 mt-5">
                            <div className="badge bg-dark">
                                Search Result
                            </div>
                            <div className="align-self-center ">
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

                        <div className='dspl1 mt-5' style={{ height: "" }}>
                            <div className="badge bg-dark">
                                <h5>
                                    Products
                                </h5>
                            </div>
                            <div className='row mt-5 m-2 d-flex justify-content-center '>
                                {data.map((element, i) => {
                                    return <ProductList key={i} pname={element.Product_Name} pid={element._id} Image={element.Images.AmazonP} Prices={[element.Prices.AmazonP, element.Prices.FlipkartP]} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
