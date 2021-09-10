import React from 'react';
import { Provider } from "@lyket/react";
import ReactDOM from 'react-dom';
import App from './App';
import './styles/App.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider apiKey="pt_9085da4ceaa609660a9b0d87604e3a">
    <App />
    </Provider>
  
  </React.StrictMode>,
  document.getElementById('root')
);
