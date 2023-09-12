import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/home';
import Details from './pages/details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/details/:id',
    element: <Details />
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
