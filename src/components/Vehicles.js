import React from 'react';
import { useQuery } from 'react-query';
import Vehicle from './Vehicle';


const fetchVehicles = async () => {
    const res = await fetch( 'https://swapi.dev/api/vehicles' );
    return res.json();
}

export default function Vehicles() {

    const { data, status } = useQuery( 'vehicles', fetchVehicles );
    console.log(data);

    return(
        <div>
            <h2>Vehicles</h2>

            { status === 'loading' && (
                <div>Loading data ...</div>
            )}
            
            { status === 'error' && (
                <div>Error fetching data</div>
            )}
            
            { status === 'success' && (
                <div>
                    { data.results.map( vehicle => 
                        <Vehicle
                            key= { vehicle.name }
                            vehicle= { vehicle }
                        />)}
                </div>
            )}

        </div>
    );
}