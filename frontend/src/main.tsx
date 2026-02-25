import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { StudentProvider } from './contexts/Student.js'
import {SnackbarProvider} from 'notistack'

const container = document.getElementById('root');
if (!container) throw new Error('Root container missing in index.html');

createRoot(container).render(
  <StrictMode>
    <SnackbarProvider />
    <StudentProvider>
      <App />
    </StudentProvider>
  </StrictMode>,
)
