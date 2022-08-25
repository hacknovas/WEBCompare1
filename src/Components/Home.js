import React from 'react';
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <>
            <button>
                <Link to="/product"> Open Products </Link>
            </button>
        </>
    )
}
