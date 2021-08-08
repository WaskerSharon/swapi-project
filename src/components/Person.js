import React from 'react';


export default function Person({ person }) {

    return (
        <div className="card">
            <h3>{ person.name }</h3>
            <p>Pilot - { person.starship }</p>
        </div>
    )

}