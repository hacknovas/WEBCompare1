import React from 'react';
import "../cssElem/home.css";

export default function Home() {
    return (
        <>
            <div id="carouselExampleDark" className="carousel carousel-dark slide px-3 mt-2" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item  active" data-bs-interval="2000">
                        <img src="../../images/2.jpg" style={{ height: "500px" }} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>WELCOME   TO   SMARTCOMPARE</h5>
                            <p>Compare The Product From All The Sites At One Place Only</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <img src="../../images/1.jpg" style={{ height: "500px" }} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>WELCOME   TO   SMARTCOMPARE</h5>
                            <p>Compare The Product From All The Sites At One Place Only</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
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
        </>
    )
}
