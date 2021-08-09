import React from 'react';

export default function Navbar({ setPage }) {

    return (
        <nav>
            <button onClick={() => setPage( 'vehicles' )}>Vehicles</button>
            <button onClick={() => setPage( 'people' )}>People</button>
            {/* <button>Pilots</button>
            <button>Population</button> */}
        </nav>
    )
}