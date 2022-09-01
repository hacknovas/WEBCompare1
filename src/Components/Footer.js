import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="text-center text-white mt-5" style={{ backgroundColor: "#f1f1f1" }}>
                <div className="container pt-4">
                </div>

                <div className="text-center text-dark p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2022 Copyright :
                    <a className="text-dark" href="/home" style={{ textDecoration: "none" }}> WebCompare @Doni_Prathamesh</a>
                </div>
            </footer>
        </>
    )
}
