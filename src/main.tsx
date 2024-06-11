import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { AuthProvider } from './contexts/global/AuthContext'
import { ModalsProvider } from './contexts/global/ModalsContext'
import { RefetchProvider } from './contexts/global/RefetchContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <ModalsProvider>
        <RefetchProvider>
          <App />
        </RefetchProvider>
      </ModalsProvider>
    </AuthProvider>
  </React.StrictMode>
)
