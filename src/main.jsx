import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './RouteDessert.css'
import './index.css'
//import Routing from './Routing.jsx';
//import Routed from './Routed.jsx';
//import Routered from './Routered.jsx';
import RoutedDessert from './RouteDessert.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RoutedDessert />
  </BrowserRouter>
);
