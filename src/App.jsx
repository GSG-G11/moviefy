import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Nav from './Component/Nav';
import Movies from './Component/Movies';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Movies />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
