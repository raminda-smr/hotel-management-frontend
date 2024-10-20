import IndexPage from "./index/indexPage";
import Header from "./parts/header";
import { Routes, Route } from "react-router-dom";
import SearchRooms from "./search-rooms/searchRooms";
import AboutUs from "./about-us/aboutUs";
import ContactUs from "./contact-us/contactUs";
import Login from "./login/login";
import Register from "./register/register";


function HomePage() {

    return (
        <>
            <Header />

            <Routes path="/*">
                <Route path="/" element={<IndexPage />} />
                <Route path="/search-rooms" element={<SearchRooms />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

            </Routes>
            
        </>
    )
}

export default HomePage