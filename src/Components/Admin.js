import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner1 from '../Spinners/Spinner1';
import '../cssElem/admincss.css';

export default function Admin() {
    const navigate = useNavigate();

    const [name, setname] = useState("None");
    const [email, setemail] = useState("None");

    useEffect(() => {
        return () => {
            getAdminPage();
        }
    }, []);

    const getAdminPage = async () => {
        try {
            const result = await fetch('/chkadmin', {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: "include"
            });

            const results = await result.json();

            if (result.status == 400) {
                const err = new Error("Error Occuered");
                throw err;
            } else {
                setname(results.Name);
                setemail(results.Email);
                navigate("/admin");
            }
        } catch (err) {
            console.log(err);
            alert("Your Not logged as Admin....");
            navigate("/");
        }
    }

    const insertions = async (e) => {
        e.preventDefault();

        document.querySelector(".dspl1").style.display = "block";
        document.querySelector(".dspl2").style.display = "none";

        const results = await fetch("/insertdatas", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Name: e.target["PName"].value,
                FLink: e.target["FLink"].value,
                ALink: e.target["ALink"].value,
                CLink: e.target["CLink"].value,
                Category: e.target["Option"].value
            })
        })


        if (results.status === 200) {
            alert("Data Successfully Submited.....");
            test();
        } else {
            alert("Not Submited");
        }
    }

    function test() {
        document.querySelector(".dspl1").style.display = "none";
        document.querySelector(".dspl2").style.display = "block";
    }


    return (
        <>
            <div className='row'>
                <div className='col-6 dspl2'>
                    <div className="containerns ">
                        <form className="formm" onSubmit={insertions}>
                            <div className="form__text">
                                Product Details
                            </div>
                            <div className="form__group">
                                <input type="text" name='PName' className="form__input" placeholder="Product name" id="Product name" required />
                                <label for="Product name" className="form__label">Product name</label>
                            </div>
                            <label for="Product Links" className="form__label">Product Links</label>
                            <div className="form__group">
                                <input type="url" className="form__input" placeholder="Amazon Link" id="Amazon" name='ALink' required />
                                <label for="Amazon" className="form__label">Amazon</label>
                            </div>

                            <div className="form__group">
                                <input type="url" className="form__input" placeholder="Flipkart link" id="Flipkart" required name='FLink' />
                                <label for="Flipkart" className="form__label">Flipkart</label>
                            </div>

                            <div className="form__group">
                                <input type="url" className="form__input" placeholder="Croma Link" id="Meesho" name='CLink' />
                                <label for="Meesho" className="form__label">Croma</label>
                            </div>
                            <select class="form-select" aria-label="Default select example" name='Option'>
                                <option selected>Open this select menu</option>
                                <option value="Fashion">Fashion</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Mobile">Mobiles</option>
                            </select>
                            <div className="btn btn-primary ">
                                <input type="submit" value="Submit" style={{ textDecoration: "none" }} />
                            </div>
                        </form>
                    </div>
                </div>

                <div className="col-6 dspl1">
                    <Spinner1 />
                </div>

                <div className="col-2"></div>
                <div className="card col-3 m-5 pt-5" style={{ width: "19rem" }}>
                    <img src="https://icon-library.com/images/coding-icon-png/coding-icon-png-11.jpg" className="card-img-top" alt="..." />
                    <br /><div className="card-body">
                        Admin Name:<h5 className="card-title">{name}</h5>
                        Admin E-Mail:<h5 className="card-title"> {email}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}