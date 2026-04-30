// main.jsx
// Application entry point.
// BrowserRouter wraps the whole tree so any component can use routing hooks.
// Analytics is placed inside the provider so it tracks every route change
// automatically — no per-page configuration needed.

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { WixDesignSystemProvider } from '@wix/design-system'
import { Analytics } from '@vercel/analytics/react'
import App from './App.jsx'
import '@wix/design-system/styles.global.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BrowserRouter enables client-side navigation without full page reloads */}
    <BrowserRouter>
      <WixDesignSystemProvider features={{ newColorsBranding: true }}>
        <App />
        {/* Analytics auto-tracks page views for every route in the app */}
        <Analytics />
      </WixDesignSystemProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
