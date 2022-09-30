import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from "./store"
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>  
      <Provider store={store}>
         <QueryClientProvider client={queryClient}>
         <ReactQueryDevtools initialIsOpen={true} />
              <App />  
          </QueryClientProvider> 
      </Provider>
    </React.StrictMode>
  
);

reportWebVitals();
