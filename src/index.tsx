import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppCtx, defaultAppContext } from './store/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AppCtx.Provider value={defaultAppContext}>
    <App />
  </AppCtx.Provider>
);
