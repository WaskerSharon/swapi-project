import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import NavBar from './components/NavBar';
// import Pilots from './components/Pilots';
// import Planets from './components/Planets';
import People from './components/People';
import Starships from './components/Starships';

import { ReactQueryDevtools } from 'react-query/devtools'


const queryClient = new QueryClient();


export default function App() {

  const [ page, setPage ] = useState( 'starships');


  return (
    <>
      <div className="App">
        <h1>SWAPI Project</h1>

          <NavBar setPage={ setPage }/>

          <QueryClientProvider client={ queryClient }>

              { page === 'starships' ? <Starships /> : <People /> }     

              {/* <Pilots /> */}

              {/* <Starships /> */}
              <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
      </div>

    </>
  );
};
