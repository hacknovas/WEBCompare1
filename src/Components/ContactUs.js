import React from 'react';
import { useState, useEffect } from 'react';
import '../cssElem/contact.css';

export default function ContactUs() {

    const [userData, setuserData] = useState({ name: "", email: "", message: "" });

    useEffect(() => {
        return () => {
            getContactPage();
        }
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

    const sendDataBE = async (e) => {
        e.preventDefault();

        const result = await fetch("/chkcontact", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                PName: e.target["PName"].value, Message: e.target["Message"].value
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
            <div id="aldtr" >

                <div className="cntr" >
                    <div className="content">
                        <div className="left-side">
                            <h3><div className="badge " style={{ color: "#3e2093" }}>Send Message <br /> As</div></h3>
                            <div className="phone details">
                                <div className="topic">Name</div>
                                {userData.name}
                            </div>
                            <div className="email details">
                                <div className="topic">Email</div>
                                <a mailto="creatives.doni@gmail.com" style={{ textDecoration: "none", color: "black" }}> {userData.email} </a>
                            </div>
                        </div>

                        <div className="right-side">
                            <b>
                                <div className="topic-text text-center"> Request For Product</div>
                            </b>
                            <hr />
                            <div className="topic-text text-center">Send Us a Message</div>

                            <form onSubmit={sendDataBE}>
                                <div className="input-box">
                                    <input type="text" placeholder="Enter Product Name" required="required" name='PName' />
                                </div>
                                <div className="input-box">
                                    <input type="text" placeholder="Type your Message" name='Message' />
                                </div>
                                <input type="submit" value="Send" className='btn btn-sm btn-dark' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
