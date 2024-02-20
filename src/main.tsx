import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="18602475738-rju91nobp3b779b4truv1qk066st8t5o.apps.googleusercontent.com">
    <App />
      </GoogleOAuthProvider>
  </React.StrictMode>,
)
