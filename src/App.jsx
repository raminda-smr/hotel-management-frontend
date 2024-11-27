import { useContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminPage from './pages/admin-pages/adminPage'
import HomePage from './pages/client-pages/homePage'
import LoginPage from './pages/login-page/LoginPage'
import { Toaster } from 'react-hot-toast'
import RegisterPage from './pages/register-page/RegisterPage'
import UserContext from './context/userContext'


function App() {

    const { user, setUser } = useContext(UserContext)
    const [userLogged, setUserLogged] = useState(false)
    
    useEffect(()=>{
        
        const token = localStorage.getItem('token')

        if(token != null){
            axios.get(import.meta.env.VITE_BACKEND_URL + '/api/users/logged',{
                headers:{
                    "Authorization" : 'Bearer ' + token,
                    "Content-Type" : "application/json"
                }
            })
            .then(
                (res)=>{
                    setUser(res.data.user)
                    setUserLogged(true)
                }
            ).catch(
                (err)=>{
                    setUserLogged(false)
                }
            )
        }
        else{
            setUserLogged(false)
        }
    },[userLogged])


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
