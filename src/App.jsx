import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminPage from './pages/admin-pages/adminPage'
import HomePage from './pages/client-page/homePage'
import PageNotFound from './pages/404-page/pageNotFound'
import LoginPage from './pages/login-page/LoginPage'
import TestPage from './pages/test-page/testPage'


function App() {
    const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <Routes path="/*">
                <Route path="/*" element={<HomePage />} />
                <Route path="/admin/*" element={<AdminPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/test" element={<TestPage />} />

            </Routes>
        </BrowserRouter>
    )
}

export default App
