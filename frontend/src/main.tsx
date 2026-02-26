import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import {SnackbarProvider} from 'notistack'
import { Provider } from 'react-redux'
import store from './store/store.js'

const container = document.getElementById('root');
if (!container) throw new Error('Root container missing in index.html');

createRoot(container).render(
  <StrictMode>
    <SnackbarProvider />
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
