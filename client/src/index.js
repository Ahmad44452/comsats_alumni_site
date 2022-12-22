import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './AppRoutes';

import { Provider } from 'react-redux';

import GlobalStyles from './Styles/Global.styled';
import { reduxStore } from './store';
import LoadingScreen from './components/LoadingScreen';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={reduxStore}>
      <LoadingScreen />
      <AppRoutes />
    </Provider>
  </React.StrictMode>
);
