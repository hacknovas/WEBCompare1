import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {

    const navigate = useNavigate();

    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            navigate('/login');
        }).catch((err) => {
            console.log("error Occured");
        })
    });



    // const goOut = async () => {
    //     const result = await fetch('/logout', {
    //         method: "GET",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });

    //     const data=await result.json();
    //     alert(data.message);
    // }

    // useEffect(() => {
    //     goOut();
    // },[]);


    return (
        <>
            <h1>Logout Page</h1>
        </>
    )
}
