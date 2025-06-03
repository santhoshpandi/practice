import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StudentProvider } from './contexts/Student'
import {SnackbarProvider} from 'notistack'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SnackbarProvider />
    <StudentProvider>
      <App />
    </StudentProvider>
  </StrictMode>,
)
