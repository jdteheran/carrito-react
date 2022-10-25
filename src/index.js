import React from 'react';
import ReactDOM from 'react-dom/client';
import Fruta from './components/Fruta'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Fruta nombre={'Mango'} precio={3} />
   
  </React.StrictMode>
);
