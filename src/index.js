import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './context/userContext';
import { MessageContexteProvider } from './context/messageContexte';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <MessageContexteProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
    </MessageContexteProvider>
  </BrowserRouter>
);

