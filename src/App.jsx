import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Router } from './config/Routers/Router';

const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
