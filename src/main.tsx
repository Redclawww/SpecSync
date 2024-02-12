import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="18602475738-61c3butubqtcuf0mqaofp45kk3ja2b16.apps.googleusercontent.com">
    <App />
      </GoogleOAuthProvider>
  </React.StrictMode>,
)
