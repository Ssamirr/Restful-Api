import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./assets/reset.css"
import "./assets/main.css"
import { QueryClientProvider, QueryClient } from "react-query";

const client = new QueryClient();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
);
