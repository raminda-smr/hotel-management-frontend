import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminPage from './pages/admin-pages/adminPage'
import HomePage from './pages/client-pages/homePage'
import LoginPage from './pages/login-page/LoginPage'
import { Toaster } from 'react-hot-toast'
import RegisterPage from './pages/register-page/RegisterPage'


function App() {
    const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <Toaster position="top-right" reverseOrder={false} />

            <Routes path="/*">
                <Route path="/*" element={<HomePage />} />
                <Route path="/admin/*" element={<AdminPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

            </Routes>
            
        </BrowserRouter>
    )
}

export default App
