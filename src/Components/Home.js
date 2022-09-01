import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div id="carouselExampleDark" className="carousel carousel-dark slide px-3 mt-2" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="../../images/1.jpg" style={{ height: "500px" }} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>WELCOME   TO   SMARTCOMPARE</h5>
                            <p>Compare The Product From All The Sites At One Place Only</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="../../images/2.jpg" style={{ height: "500px" }} className="d-block w-100" alt="..." />
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
            <div className="card text-center py-5">
                <div className="card-header">
                </div>
                <div className="card-body">
                    <h5 className="card-title">See Some Products.....</h5>
                    <p className="card-text"></p>
                    <div className="btn btn-primary">
                        <Link to="/product" ><div className='badge border text-light'>Open Products</div></Link>
                    </div>

                </div>
                <div className="card-footer text-muted">
                </div>
            </div>
            <div className="container">
                <h3 className='text-center mt-3'><span className='badge bg-dark'>Our Team</span></h3>
                <div className="row container mx-4 py-3 ">
                    <div className="card col-4 m-5" style={{ width: "18rem", borderRadius: "10%"}}>
                        <img src="../../images/swati.jpg" className="card-img-top" style={{ height: "250px", borderRadius: "50%" }} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Swati Shelake</h5>
                            <p>Front End Developer</p>
                            <a href="#" className="btn btn-secondary">Linkedin</a>
                        </div>
                    </div>
                    <div className="card col-4 m-5" style={{ width: "18rem" , borderRadius: "10%"}}>
                        <img src="../../images/riddhi.jpg" className="card-img-top" style={{ height: "250px", borderRadius: "50%" }} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Riddhi Chavhan</h5>
                            <p>Front End Developer</p>
                            <a href="#" className="btn btn-secondary">Linkedin</a>
                        </div>
                    </div>
                    <div className="card col-4 m-5" style={{ width: "18rem", borderRadius: "10%" }}>
                        <img src="../../images/komal.jpg" className="card-img-top" style={{ height: "250px", borderRadius: "50%" }} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Komal Panchal</h5>
                            <p>Front End Developer</p>
                            <a href="#" className="btn btn-secondary">Linkedin</a>
                        </div>
                    </div>
                </div>
                <div className="container row mx-4">
                    <div className="col-2"></div>
                    <div className="card col-4 m-2 mx-5" style={{ width: "18rem", borderRadius: "10%" }}>
                        <img src="../../images/Prajakta.jpg" className="card-img-top" style={{ height: "250px", borderRadius: "50%" }} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Prajakta Ghanwat</h5>
                            <p>Front End Developer</p>
                            <a href="#" className="btn btn-secondary">Linkedin</a>
                        </div>
                    </div>
                    <div className="card col-4  mx-5" style={{ width: "18rem", borderRadius: "10%" }}>
                        <img src="../../images/PD.jpg" className="card-img-top" style={{ height: "250px", borderRadius: "50%" }} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Doni Prathamesh</h5>
                            <p>Full Stack Developer</p>
                            <a href="https://www.linkedin.com/in/prathamesh-doni-15aab8209/" target="_blank" className="btn btn-secondary">Linkedin</a>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </>
    )
}
