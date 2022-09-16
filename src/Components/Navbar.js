import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
    const navigate = useNavigate();
    const [Name, setName] = useState("...");


    const getData = async () => {
        try {
            const result = await fetch('/getdata', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const results = await result.json();

            if (!results.status === 200) {
                const err = new Error("Error Occuered");
                throw err;
            } else {
                setName(results.Name);
            }
        } catch (err) {
        }
    }

    const logout = async () => {
        setName("...");
        fetch('/logout', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            alert("Successfuly Logout");
            navigate('/');
        }).catch((err) => {
        })
    }

    const searchProd = async (e) => {
        e.preventDefault();
        const res = await fetch("/searchProd", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Name: e.target["Name"].value
            })
        });

        const result = await res.json();
        const fr = result[0].Images.AmazonP;
        const obj = { _id: result[0]._id, Prices: [result[0].Prices.AmazonP, result[0].Prices.FlipkartP] };

        if (result) {
            document.querySelector(".dspl3").style.display = "block";
            document.querySelector(".dspl3").children[1].children[0].children[0].setAttribute("src", fr);
            document.querySelector(".dspl3").children[1].children[0].children[1].children[0].innerHTML = result[0].Product_Name;
            document.querySelector(".dspl3").children[1].children[0].children[1].children[1].children[0].setAttribute("state", obj);

            navigate('/product');
        } else {
            alert(result.message);
        }

    }

    return (
        <>
            <nav className="navbar sticky-top row shadow rounded" style={{ backgroundColor: "#f0f0ff" }}>
                <div className='col-1'>
                    <b><Link to="/home" style={{ textDecorationLine: "none" }} className="btn-sm text-secondary"> &nbsp;&nbsp;&nbsp;WebCompare</Link></b>
                </div>
                <div className="col-5">
                    <ul className=" me-auto mb-2">
                        <li className='mx-2 btn'>
                            <strong><Link className=" text-dark" style={{ textDecorationLine: "none" }} to="/home"> Home</Link></strong>
                        </li>
                        <li className='mx-2 btn'>
                            <strong><Link className=" text-dark" style={{ textDecorationLine: "none" }} to="/product"> Products</Link></strong>
                        </li>
                        <li className='mx-2 btn'>
                            <strong><Link to='/contactus' style={{ textDecorationLine: "none" }} className="text-dark">Contact Us</Link></strong>
                        </li>
                    </ul>
                </div>

                <div className="col-4">
                    <form className="d-flex" onSubmit={searchProd}>
                        <input className="form-control me-2" type="search" placeholder="Search Product" aria-label="Search" name='Name' />
                        <h5><input className="btn btn-outline-secondary" type="submit" value="Go" /></h5>
                    </form>
                </div>

                <div className="col-2" onClick={getData}>
                    <ul style={{ listStyle: "none" }}>
                        <li className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="../../images/1234.png" width="40" height="40" className="rounded-circle" />
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <div className="dropdown-item text-center" >{Name}</div>
                                <div className="dropdown-item" >
                                    <Link to='/' style={{ textDecorationLine: "none" }} className="text-dark">Login</Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link to='/admin' style={{ textDecorationLine: "none" }} className="text-dark">Admin</Link>
                                </div>
                                <div className='dropdown-item'>
                                    <div onClick={logout} > Log Out </div>
                                </div >
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
