import React, { JSX } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Game from './Game';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Game />} />
        {/* TODO: Add paths to React component if you need other pages */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
