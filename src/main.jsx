import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import {store, persistor} from './pages/store/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { GoogleOAuthProvider } from '@react-oauth/google';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <GoogleOAuthProvider clientId="816287611328-t19ohcv6ajjui98k8upt5pdt6ma3289g.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
    </PersistGate>
    </Provider>
  </React.StrictMode>
)
