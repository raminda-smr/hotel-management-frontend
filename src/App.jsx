import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AdminPage } from './components/pages/admin-pages/adminPage'
import { PageNotFound } from './components/pages/error-pages/pageNotFound'
import HomePage from './components/pages/client-pages/homePage'


function App() {
    const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <Routes path="/*">
                <Route path="/" element={<HomePage />} />
                <Route path="/admin/*" element={<AdminPage />} />

                <Route path="/*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
