import React from 'react';
import { useState, useEffect } from 'react';

export default function ContactUs() {

    const [userData, setuserData] = useState({ name: "", email: "", message: "" });

    useEffect(() => {
        getContactPage();
    }, []);

    const getContactPage = async () => {
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
                setuserData({ ...userData, name: results.Name, email: results.Email });
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setuserData({ ...userData, [name]: value });
    }

    const sendDataBE = async (e) => {
        e.preventDefault();

        const { name, email, message } = userData;

        const result = await fetch("/chkcontact", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                name, email, message
            })
        });

        const data = await result.json();

        if (!data) {
            alert("Message No Sent");
        } else {
            alert("Message Sent");
            setuserData({ ...userData, message: "" });
        }
    }

    return (
        <>
            <section className="mb-4">

                <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.
                </p>

                <div className="row" onSubmit={sendDataBE}>
                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" >
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" className="form-control" value={userData.name} />
                                        <label htmlFor="name" className="" >Your name</label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" className="form-control" value={userData.email} />
                                        <label htmlFor="email" className="">Your email</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" id="subject" name="message" className="form-control" onChange={handleInput} value={userData.message} />
                                        <label htmlFor="subject" className="">Subject</label>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center text-md-left">
                                <input className="btn btn-primary" value="Submit" type='submit' />
                            </div>
                        </form>

                    </div>
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>San Francisco, CA 94126, USA</p>
                            </li>

                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                <p>+ 01 234 567 89</p>
                            </li>

                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p>contact@mdbootstrap.com</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
        </>
    )
}
