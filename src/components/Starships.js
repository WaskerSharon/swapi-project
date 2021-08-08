import React from 'react';
import { useQuery } from 'react-query';
import Starship from './Starship';
// import Pilot from './Pilots';


const fetchStarships = async () => {
    const res = await fetch( 'https://swapi.dev/api/starships/' );
    return res.json();
}

export default function Starships() {

    const { data, status } = useQuery( 'Starships', fetchStarships );
    console.log(data);

    return(
        <div>
            <h2>Starships</h2>

            { status === 'loading' && (
                <div>Loading data ...</div>
            )}
            
            { status === 'error' && (
                <div>Error fetching data</div>
            )}
            
            { status === 'success' && (
                <div>
                    { data.results.map( starship => 
                        <Starship
                            key= { starship.name }
                            starship={ starship }
                        />)}

                    {/* { data.results.map( pilot => 
                        <Pilot
                            key= { pilot.name }
                            pilot={ pilot }
                        />)} */}
                </div>
            )}

        </div>
    );
}