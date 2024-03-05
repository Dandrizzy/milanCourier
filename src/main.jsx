import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './Store/store.js';
import { Theme } from '@radix-ui/themes';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <Provider store={store}>
        <App />
      </Provider>
    </Theme>
  </React.StrictMode>,
);
