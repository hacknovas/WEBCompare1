import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Spinner1 from "../Spinners/Spinner1";
import "../cssElem/spncss.css";

export default function ProductDetails() {
  const location = useLocation();
  const data = location.state;
  console.log(data, "Done");

  const [obj, setobj] = useState({
    Links: { "Amazon": "", "Flipkart": "", }, Prices: { "AmazonP": "", "FlipkartP": "" }, Ratings: { "AmazonP": "", "FlipkartP": "" }, Images: { "AmazonP": "" }, Product_Name: "",
  });

  var result;


  const getData = async () => {
    try {

      const res = await fetch("/getSingleData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: data._id,
          Prices: {
            AmazonP: data.Prices[0],
            FlipkartP: data.Prices[1]
          }
        })
      });

      result = await res.json();
      setobj(result);
    } catch (err) {
      console.log("Error Occured")
    }

    setTimeout(test, 2000);

    function test() {
      if (result) {
        document.querySelector(".dspl1").style.display = "block";
        document.querySelector(".dspl2").style.display = "none";
      }
    }
  }

  useEffect(() => {
    return () => {
      getData();
    }
  }, []);

  return (
    <>

      <div className="container dspl2">
        <Spinner1 />
      </div>

      <div className="container dspl1" >
        <div className="w3-content w3-margin-top" style={{ maxWidth: "1400px" }}>
          <div className="w3-row-padding">
            <div className="w3-third">
              <div className="w3-white w3-text-grey w3-card-4">
                <div className="w3-display-container">
                  <img src={obj.Images.AmazonP} style={{ width: "100%" }} alt="Avatar" />
                  <div className="w3-display-bottomleft w3-container text-light">
                  </div>
                </div>
                <div className="w3-container">
                  <p><h2>{obj.Product_Name}</h2></p>
                  <hr />
                  <br />
                  <br />
                </div>
              </div>
              <br />
            </div>

            <div className="w3-twothird">

              <div className="w3-container w3-card w3-white w3-margin-bottom">
                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Different Sites</h2>
                <div className="w3-container">
                  <h5 className="w3-opacity"><b>Flipkart</b></h5>
                  <h6 className="w3-text-teal">Rating: {obj.Ratings.FlipkartP} </h6>
                  <div className='container'>
                    <button type="button" className="btn btn-secondary">{obj.Prices.FlipkartP}</button>
                    <div className='btn btn-primary mx-5'><a href={obj.Links.Flipkart} style={{ textDecoration: "none" }} className="text-light" target="_blank">Visit Site</a></div>
                  </div>
                  <hr />
                </div>
                <div className="w3-container">
                  <h5 className="w3-opacity"><b>Amazon</b></h5>
                  <h6 className="w3-text-teal">Ratings: {obj.Ratings.AmazonP}</h6>
                  <div className="container">
                    <button type="button" className="btn  btn-secondary">{obj.Prices.AmazonP}</button>
                    <div className='btn btn-primary mx-5'><a href={obj.Links.Amazon} style={{ textDecoration: "none" }} className="text-light" target="_blank">Visit Site</a></div>
                  </div>
                  <hr />
                </div>
              </div>

              <div className="w3-container w3-card w3-white">
                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Reviews</h2>
                <div className="w3-container">
                  <h5 className="w3-opacity"><b>Top Reviews</b></h5>
                  <br />
                  <p>Reviews Will Appear Here......</p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div >
      </div>
    </>
  )
}
