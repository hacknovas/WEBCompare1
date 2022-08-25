import React, { useEffect } from 'react';

export default function TimePass() {

    const Information = async () => {
        const results = await fetch("https://api.sampleapis.com/codingresources/codingResources", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const res = await results.json();
    }

    useEffect(() => {

        Information();


    }, [])


    return (
        <>
            <div className="container row">
                <div className="col-4">1</div>
                <div className="col-4">2</div>
                <div className="col-4">3</div>
            </div>
        </>
    )
}
