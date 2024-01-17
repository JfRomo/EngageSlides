import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SlideProvider } from './Providers/SlideProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SlideProvider>
      <App />
    </SlideProvider>
  </React.StrictMode>,
)
