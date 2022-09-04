import React, { useState, useEffect } from 'react';
import "../cssElem/home.css";


export default function Home() {

    const [feedbacks, setfeedbacks] = useState([{ Name: "", rate: "", message: "" }, { Name: "", rate: "", message: "" }, { Name: "", rate: "", message: "" }]);

    const getfeed = async () => {
        console.log("he");
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

            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="../../images/2.jpg" alt="First slide" style={{ height: "500px" }} />

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
            <div class='container-fluid mx-auto mt-5 mb-5 col-12' style={{ textAlign: "center" }}>
                <div class="hd">Why People Believe in Us</div><br />
                <p><small class="text-muted">Always render more and better service than <br />is expected of you, no matter what your ask may be.</small></p>
                <div class="row" style={{ justifyContent: "center" }}>
                    <div class="card col-md-3 col-12">
                        <div class="card-content">
                            <div class="card-body"> <img class="img" src="https://i.imgur.com/S7FJza5.png" />
                                <div class="shadow"></div>
                                <div class="card-title"> Easy Compare</div><br />
                                <div class="icon-wrapper">
                                    <i class="fas fa-brush"></i>
                                </div>  <br />
                                <div class="card-subtitle">
                                    <p> <small class="text-muted">just search your product and get links of all the sites where that product is available</small> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card col-md-3 col-12 ml-2">
                        <div class="card-content">
                            <div class="card-body"> <img class="img" src="https://i.imgur.com/xUWJuHB.png" />
                                <div class="card-title">Get Best Product</div><br />
                                <div class="icon-wrapper">
                                    <i class="fas fa-hammer"></i>
                                </div><br />
                                <div class="card-subtitle">
                                    <p> <small class="text-muted"> After comparying the product from all thes sites you will be able to find best product</small> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card col-md-3 col-12 ml-2">
                        <div class="card-content">
                            <div class="card-body"> <img class="img rck" src="https://i.imgur.com/rG3CGn3.png" />
                                <div class="card-title"> Enjoy Shopping</div><br />
                                <div class="icon-wrapper">
                                    <i class="fas fa-wrench"></i>
                                </div><br />
                                <div class="card-subtitle">
                                    <p> <small class="text-muted">Get easier to compare the products from all the attributes and finding the best product is now much more easier so just shop now with smartcompare</small> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section class="home-testimonial">
                <div class="container-fluid">
                    <div class="row d-flex justify-content-center testimonial-pos">
                        <div class="col-md-12 pt-4 d-flex justify-content-center text-light">
                            <h2>Explore</h2>
                        </div>
                        <div class="col-md-12 d-flex justify-content-center text-light">
                            <h3>The User Experience</h3>
                        </div>
                    </div>

                    <section class="home-testimonial-bottom">
                        <div class="container testimonial-inner">
                            <div class="row d-flex justify-content-center">
                                <div class="col-md-4 style-3">
                                    <div class="tour-item ">
                                        <div class="tour-desc" style={{backgroundColor:"#f0f0ff"}}>
                                            <div class="tour-text color-grey-3 text-center">&ldquo; {feedbacks[0].message} &rdquo;</div>
                                            <br />
                                            <div class="link-name d-flex justify-content-center">- {feedbacks[0].Name}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 style-3">
                                    <div class="tour-item ">
                                        <div class="tour-desc "style={{backgroundColor:"#f0f0ff"}}>
                                            <div class="tour-text color-grey-3 text-center">&ldquo; {feedbacks[1].message} &rdquo;</div>
                                            <br />
                                            <div class="link-name d-flex justify-content-center">- {feedbacks[1].Name}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 style-3">
                                    <div class="tour-item ">
                                        <div class="tour-desc "style={{backgroundColor:"#f0f0ff"}}>
                                            <div class="tour-text color-grey-3 text-center">&ldquo;{feedbacks[2].message}&rdquo;</div>
                                            <br />
                                            <div class="link-name d-flex justify-content-center">- {feedbacks[2].Name}</div>
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
