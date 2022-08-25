import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//always send data like string to server

export default function Admin() {

    const navigate = useNavigate();

    const [name, setname] = useState("None");
    const [email, setemail] = useState("None");

    useEffect(() => {
        getAdminPage();
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
            // console.log(results);

            if (!results.status === 200) {
                const err = new Error("Error Occuered");
                throw err;
            } else {
                setname(results.Name);
                setemail(results.Email);
                navigate("/admin");
            }
        } catch (err) {
            console.log(err);
            navigate("/login");
        }
    }

    const insertions = async (e) => {
        e.preventDefault();
        const results = await fetch("/insertdatas", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Name: e.target["PName"].value,
                FLink: e.target["FLink"].value,
                ALink: e.target["ALink"].value,
                CLink:e.target["CLink"].value
            })
        })

        if (results.status === 200) {
            alert("Submites");
        } else {
            alert("Not Submited");
        }
    }
    return (
        <>
            <div className="row">
                <div className="col-6" onSubmit={insertions}>
                    <form className='row'>
                        <div className="col-4">
                            <label htmlFor="exampleInputEmail1" className="form-label"><b> Product Name</b></label>
                            <input type="text" className="form-control" id="exampleInputEmail1" name='PName' required/>
                        </div>
                        <div className=" col-4">
                            <label htmlFor="exampleInputPassword1" className="form-label"><b>Product Links</b></label>
                            <br /><span className="badge bg-secondary">Amazon</span> <input type="text" className="form-control" id="exampleInputPassword1" name='ALink' required/>
                            <span className="badge bg-secondary">Flipkart</span> <input type="text" className="form-control" id="exampleInputPassword1" name='FLink' required/>
                            <span className="badge bg-secondary">Croma</span> <input type="text" className="form-control" id="exampleInputPassword1" name='CLink' required/>
                        </div>
                        <div className='col-4'>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-6">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">Email: {email}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
