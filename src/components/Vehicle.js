import React from 'react';


export default function Vehicle({ vehicle }) {

    return (
        <div >
            <h3>Vehicle name - { vehicle.name }</h3>
            <div>Pilot - { vehicle.pilots.map(( data, id ) => {
                return <p key={id}>{data}</p>
            }) }</div>
        </div>
    )

}