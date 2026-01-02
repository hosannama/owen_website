import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { OwenAuPortfolio } from './src/OwenAuPortfolio'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <OwenAuPortfolio />
    </HashRouter>
  </React.StrictMode>
)