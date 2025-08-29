import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import AuthLayout from './components/auth/AuthLayout.tsx'
import Login from './components/auth/login/Login.tsx'
import Register from './components/auth/register/Register.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />

        <Route element={<AuthLayout />} >
          <Route path='login' element={ <Login /> } />
          <Route path='register' element={ <Register /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
