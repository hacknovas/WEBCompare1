import React from 'react'

export default function Spinner2() {
    return (
        <>
            <div className='container' >
                <button class="btn btn-primary " type="button" disabled >
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                </button>
            </div>
        </>
    )
}
