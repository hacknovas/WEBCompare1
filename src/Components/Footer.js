import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="text-center text-white mt-5" style={{ backgroundColor: "#f0f0ff" }}>
                <div className="container pt-4">
                </div>

                <div className="text-center text-dark p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2022 Copyright :
                    <a className="text-dark" href="/home" style={{ textDecoration: "none" }}> WebCompare @Doni_Prathamesh</a>
                </div>
            </div>
        </>
    )
}
