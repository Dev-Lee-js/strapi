import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from "./store"
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { StyledEngineProvider } from '@mui/styled-engine';
import App from './App';

const queryClient = new QueryClient();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>  
      <StyledEngineProvider injectFirst>
        <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={true} />
            <App />  
        </QueryClientProvider> 
        </Provider>
      </StyledEngineProvider>
    </React.StrictMode>
  
);


