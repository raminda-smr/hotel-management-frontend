import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SearchRooms from "../../components/client/search-rooms/searchRooms";
import Login from "../../components/client/login/login";
import Register from "../../components/client/register/register";
import Header from "../../components/client/header/header";
import IndexPage from "./index/indexPage";
import Footer from "../../components/client/footer/footer";
import AboutUs from "./about-us/aboutUs";
import Gallery from "./gallery/gallery";
import ContactUs from "./contact-us/contactUs";



export default function HomePage() {

    const [user, setUser] = useState({})
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
        <>
            <Header user={user} userLogged={userLogged} setUserLogged={setUserLogged} />

            <Routes path="/*">
                <Route path="/" element={<IndexPage />} />
                <Route path="/search-rooms" element={<SearchRooms />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

            </Routes>
            
            <Footer />
        </>
    )
}