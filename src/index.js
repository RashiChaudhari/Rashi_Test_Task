import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import Summary from './summary';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     < BrowserRouter >
     <Switch>
            <Route exact path="/" component={App} />
            <Route path="/summary" component={Summary} />
         </Switch></BrowserRouter>
  
  
  </React.StrictMode>
);

