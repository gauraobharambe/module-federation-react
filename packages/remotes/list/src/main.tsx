import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import userlist from '../public/userlist.json';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App data={userlist} />
  </React.StrictMode>,
)
