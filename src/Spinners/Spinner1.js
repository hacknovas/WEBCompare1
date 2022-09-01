import React from 'react'

export default function Spinner1() {
    return (
        <div class="d-flex justify-content-center" style={{ height: "500px" }}>
            <div class="spinner-border" role="status" style={{marginTop:"250px"}}>
                <h1><span class="visually-hidden">Loading...</span></h1>
            </div>
        </div>
    )
}
