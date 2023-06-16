import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,  RouterProvider,} from "react-router-dom";
import Home from './pages/Home';
import Services from './pages/Services';
import ErrorPage from './components/error';

import { ThemeProvider } from "@material-tailwind/react";
import About from './pages/About';
import Contact from './pages/contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/service",
    element: <Services/> ,
  },
  {
    path: "/about",
    element: <About/> ,
  },

  {
    path: "/contact",
    element: <Contact/> ,
  },
  {
    path: "*",
    element: <ErrorPage/>
    // errorElement: <ErrorPage />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router}>
     <ThemeProvider>
    <App />
    </ThemeProvider>
  </RouterProvider>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
