import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './AppRoutes';

import GlobalStyles from './Styles/Global.styled';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <AppRoutes />
  </React.StrictMode>
);
