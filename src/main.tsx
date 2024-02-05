import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="219749234928-9qlieo1p528u6qf4ta4l2kgnb0pq5p1p.apps.googleusercontent.com">
    <App />
      </GoogleOAuthProvider>
  </React.StrictMode>,
)
