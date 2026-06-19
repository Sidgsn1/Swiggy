import React from 'react'
import { useRouteError } from 'react-router';

const Error=()=>{
    const err=useRouteError();//get error details
    console.log(err) //for debugging
    return (
        <div>
            <div>
                <h3>We'll be back shortly</h3>
                <p>We are fixing a temporary glitch. Sorry for the inconvenience.</p>
                <h2>{err.status} : {err.statusText}</h2>
                <button>
                    <a href='/'>Go Back</a>
                </button>
            </div>
        </div>
    )
}

export default Error;