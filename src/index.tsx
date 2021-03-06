import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { persistor, store } from './modules/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import APIProvider from './api/apiProvider';

ReactDOM.render(
  <React.StrictMode>
    <APIProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </APIProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
