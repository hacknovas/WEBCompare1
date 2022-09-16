import React, { useState, useEffect } from 'react';
import "../cssElem/home.css";


export default function Home() {

    const [feedbacks, setfeedbacks] = useState([{ Name: "", rate: "", message: "" }, { Name: "", rate: "", message: "" }, { Name: "", rate: "", message: "" }]);

    const getfeed = async () => {
        const res = await fetch("/getFedd", {
            method: "GET"
        });

        const result = await res.json();
        setfeedbacks(result);
    }

    useEffect(() => {
        return () => {
            getfeed();
        }
    }, []);

    return (
        <>

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="../../images/2.jpg" alt="First slide" style={{ height: "500px" }} />

                        <div className="carousel-caption d-none d-md-block text-secondary" >
                            <b> <h2>WELCOME   TO   SMARTCOMPARE</h2></b>
                            <b><p>Compare The Product From All The Sites At One Place Only</p></b>
                        </div>
                    </div>
                </div>
            </div>


            <br />
            <span className="btn btn-light d-flex align-items-center justify-content-center">
                <b><h6> Our Services</h6></b>
            </span>
            <div className='container-fluid mx-auto mt-5 mb-5 col-12' style={{ textAlign: "center" }}>
                <div className="hd">Why People Believe in Us</div><br />
                <p><small className="text-muted">Always render more and better service than <br />is expected of you, no matter what your ask may be.</small></p>
                <div className="row" style={{ justifyContent: "center" }}>
                    <div className="card col-md-3 col-12">
                        <div className="card-content">
                            <div className="card-body"> <img className="img" src="https://i.imgur.com/S7FJza5.png" />
                                <div className="shadow"></div>
                                <div className="card-title"> Easy Compare</div><br />
                                <div className="icon-wrapper">
                                    <i className="fas fa-brush"></i>
                                </div>  <br />
                                <div className="card-subtitle">
                                    <p> <small className="text-muted">just search your product and get links of all the sites where that product is available</small> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-3 col-12 ml-2">
                        <div className="card-content">
                            <div className="card-body"> <img className="img" src="https://i.imgur.com/xUWJuHB.png" />
                                <div className="card-title">Get Best Product</div><br />
                                <div className="icon-wrapper">
                                    <i className="fas fa-hammer"></i>
                                </div><br />
                                <div className="card-subtitle">
                                    <p> <small className="text-muted"> After comparying the product from all thes sites you will be able to find best product</small> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-3 col-12 ml-2">
                        <div className="card-content">
                            <div className="card-body"> <img className="img rck" src="https://i.imgur.com/rG3CGn3.png" />
                                <div className="card-title"> Enjoy Shopping</div><br />
                                <div className="icon-wrapper">
                                    <i className="fas fa-wrench"></i>
                                </div><br />
                                <div className="card-subtitle">
                                    <p> <small className="text-muted">Get easier to compare the products from all the attributes and finding the best product is now much more easier so just shop now with smartcompare</small> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="home-testimonial">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center testimonial-pos">
                        <div className="col-md-12 pt-4 d-flex justify-content-center text-light">
                            <h2>Explore</h2>
                        </div>
                        <div className="col-md-12 d-flex justify-content-center text-light">
                            <h3>The User Experience</h3>
                        </div>
                    </div>

                    <section className="home-testimonial-bottom">
                        <div className="container testimonial-inner">
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-4 style-3">
                                    <div className="tour-item ">
                                        <div className="tour-desc" style={{ backgroundColor: "#f0f0ff" }}>
                                            <div className="tour-text color-grey-3 text-center">&ldquo; {feedbacks[0].message} &rdquo;</div>
                                            <br />
                                            <div className="link-name d-flex justify-content-center">- {feedbacks[0].Name}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 style-3">
                                    <div className="tour-item ">
                                        <div className="tour-desc " style={{ backgroundColor: "#f0f0ff" }}>
                                            <div className="tour-text color-grey-3 text-center">&ldquo; {feedbacks[1].message} &rdquo;</div>
                                            <br />
                                            <div className="link-name d-flex justify-content-center">- {feedbacks[1].Name}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 style-3">
                                    <div className="tour-item ">
                                        <div className="tour-desc " style={{ backgroundColor: "#f0f0ff" }}>
                                            <div className="tour-text color-grey-3 text-center">&ldquo;{feedbacks[2].message}&rdquo;</div>
                                            <br />
                                            <div className="link-name d-flex justify-content-center">- {feedbacks[2].Name}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}
