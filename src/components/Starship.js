import React from 'react';


export default function Starship({ starship }) {

    return (
        <div className="card">
            <h3>{ starship.name }</h3>
            <p>Pilot - { starship.pilot }</p>
        </div>
    )

}