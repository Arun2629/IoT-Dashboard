import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './App';
import configureStore from './store/configureStore';

const store = configureStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store= {store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
   
);
