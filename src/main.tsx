import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="<805661459359-o27ntc5t0sp4271r8dlska7tegevpep6.apps.googleusercontent.com>">;
    <App />
      </GoogleOAuthProvider>
  </React.StrictMode>,
)
