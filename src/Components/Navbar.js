import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

    const logout = async () => {
        fetch('/logout', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            alert("Successfuly Logout");
            navigate('/');
        }).catch((err) => {
            console.log("error Occured");
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
            console.log(document.querySelector(".dspl3").children[1].children[0].children[1].children[1].children[0]);

            navigate('/product');
        } else {
            alert(result.message);
        }

    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light" id='hde'>
                <div className="container-fluid">
                    <div>
                        <strong><Link to="/home" style={{ textDecorationLine: "none" }} className="text-secondary">WebCompare </Link></strong>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className='mx-2 btn'>
                                <b><Link to='/admin' style={{ textDecorationLine: "none" }} className="text-dark">Admin</Link></b>
                            </li>
                            <li className='mx-2 btn'>
                                <strong><Link to='/' style={{ textDecorationLine: "none" }} className="text-dark">Login</Link></strong>
                            </li>
                            <li className='mx-2 btn'>
                                <strong><Link to='/contactus' style={{ textDecorationLine: "none" }} className="text-dark">Contact Us</Link></strong>
                            </li>
                            <li className='mx-2 btn'>
                                <strong><a onClick={logout} className=" text-dark" style={{ textDecorationLine: "none" }}> Log Out </a></strong>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={searchProd}>
                            <input className="form-control me-2" type="search" placeholder="Search Product" aria-label="Search" name='Name' />
                            <button className="btn btn btn-outline-success" type="submit">Go</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
