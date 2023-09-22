import React,  { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './app/store'
import { Provider } from 'react-redux'
import SuspenseContent from './containers/SuspenseContent';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Suspense fallback={<SuspenseContent />}>
        <Provider store={store}>
        {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
        <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
    </Suspense>
  // </React.StrictMode>
);

