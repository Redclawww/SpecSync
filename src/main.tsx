import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="219749234928-1e9mh1of3hi4tblj0a7qu5nij3g1973j.apps.googleusercontent.com">
    <App />
      </GoogleOAuthProvider>
  </React.StrictMode>,
)
