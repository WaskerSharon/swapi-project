import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import NavBar from './components/NavBar';
import People from './components/People';
import Vehicles from './components/Vehicles';

// import { ReactQueryDevtools } from 'react-query/devtools'


const queryClient = new QueryClient();


export default function App() {

  const [ page, setPage ] = useState( 'vehicles');


  return (
    <>
      <div className="App">
        <h1>SWAPI Project</h1>

          <NavBar setPage={ setPage }/>

          <QueryClientProvider client={ queryClient }>

              { page === 'vehicles' ? <Vehicles /> : <People /> }     

              {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          </QueryClientProvider>
      </div>

    </>
  );
};
