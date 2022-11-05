import React from 'react';
import ReactDOM from 'react-dom/client';

//  BrowserRouter-ը թույլա տալիս մեզ աշխատել երի հետ։ Մեր սաղ ծրագիրը դրվումա նրա մեջ որպիսզի մեզ հասանելի լինի Նավիգացիան SPA
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

