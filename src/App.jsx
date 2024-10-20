import { useState } from 'react'
import { HomePage } from './components/pages/client-pages/homePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AdminPage } from './components/pages/admin-pages/adminPage'


function App() {
    const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <Routes path="/*">
                <Route path="/" element={<HomePage />} />
                <Route path="/admin" element={<AdminPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
