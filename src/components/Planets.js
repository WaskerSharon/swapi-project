import React from 'react';
import { useQuery } from "react-query";
import Planet from './Planet';


const fetchPlanets = async () => {
    const res = await 
    fetch( 'https://swapi.dev/api/planets/' );
    return res.json();
};

export default function Planets( {pilot} ) {

    const { data, status } = useQuery( [ 'planets', pilot ], () => fetchPlanets(pilot) );
    console.log(data);

    return(
        <div>
            <h2>Planets</h2>

            { status === 'loading' && (
                <div>Loading data ...</div>
            )}
            
            { status === 'error' && (
                <div>Error fetching data</div>
            )}
            
            { status === 'success' && (
                <div>
                    { data.results.map( ( planet ) => ( 
                        <Planet
                            key= { planet.name }
                            planet={ planet }
                        />
                    ))}
                </div>
            )}

        </div>
    );
}