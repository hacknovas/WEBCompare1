import React from 'react';
import { useNavigate } from 'react-router';

export default function Login() {
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
      navigate('/');
    }

  }

  return (
    <>
      <form onSubmit={insertions}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='Email' required/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name='Pass' required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}
