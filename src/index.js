import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './context/userContext.js';
import { MessageContexteProvider } from './context/messageContexte.js';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MessageContexteProvider>
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </MessageContexteProvider>
);

