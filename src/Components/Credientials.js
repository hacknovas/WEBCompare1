import React from 'react';
import { useNavigate } from 'react-router';
import "../cssElem/credientialcss.css";

export default function Credientials() {
  const navigate = useNavigate();

  const insertions = async (e) => {
    e.preventDefault();

    const result = await fetch("/chklogin", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Email: e.target["Email"].value,
        Pass: e.target["Pass"].value,
      })
    });

    const results = await result.json();

    if (results.status === 400) {
      alert(results.message);
    } else {
      alert(results.message);
      navigate('/home');
    }
  }

  const registrations = async (e) => {
    e.preventDefault();

    const results = await fetch("/registerUser", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Name: e.target["Name"].value,
        Email: e.target["Email"].value,
        Pass: e.target["Pass"].value,
        RPass: e.target["RPass"].value
      })
    });

    if (results.status == 200) {
      alert("User Registered Successfully");
    } else {
      alert("Retry Again");
    }
  }

  const changePage = () => {
    document.querySelector('.cont').classList.toggle('s-signup');
  }

  return (
    <>
      <div className="cont mt-5 " >
        <form onSubmit={insertions}>
          <div className="form sign-in">
            <h2>Sign In</h2>
            <label>
              <span>Email Address</span>
              <input type="email" name="Email" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" name="Pass" />
            </label>
            <button className="submit" type="submit">Sign In</button>
            <p className="forgot-pass">Forgot Password ?</p>

            <div className="social-media">
              <ul>
                <li><img src="images/facebook.png" /></li>
                <li><img src="images/Google.png" /></li>
                <li><img src="images/linkedin.png" /></li>
                <li><img src="images/instagram.png" /></li>
              </ul>
            </div>
          </div>
        </form>

        <div className="sub-cont">
          <div className="img">
            <div className="img-text m-up">
              <h2>New here?</h2>
              <p>Sign up and discover great amount of stuff!</p>
            </div>
            <div className="img-text m-in">
              <h2>One of us?</h2>
              <p>If you already has an account, just sign in. We've missed you!</p>
            </div>
            <div className="img-btn" onClick={changePage}>
              <span className="m-up" >Sign Up</span>
              <span className="m-in" >Sign In</span>
            </div>
          </div>
          <form onSubmit={registrations}>
            <div className="form sign-up">
              <h2>Sign Up</h2>
              <label>
                <span>Name</span>
                <input type="text" name="Name" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="Email" />
              </label>
              <label>
                <span>Password</span>
                <input type="password" name="Pass" />
              </label>
              <label>
                <span>Confirm Password</span>
                <input type="password" name="RPass" />
              </label>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
