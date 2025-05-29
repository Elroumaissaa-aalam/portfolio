import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Nave from './layouts/nave';
import Fouter from './layouts/fouter';


const App = () => {
  return (
    <>
   {/* <Nave/> */}
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  
    <Fouter/>
    </>
  );
};

export default App;