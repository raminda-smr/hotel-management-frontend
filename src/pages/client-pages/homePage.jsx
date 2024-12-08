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
import PageNotFound from "../404-page/pageNotFound";
import VerifyEmail from "./verify/verifyEmail";
import PasswordReset from "./password-reset/passwordReset";
import SetNewPassword from "./set-new-password/setNewPassword";
import RoomSearch from "./room-search/roomSearch";
import Feedbacks from "./feedbacks/feedbacks";
import Room from "./rooms/room";



export default function HomePage() {



    return (
        <>
            <Header />

            <Routes path="/*">
                <Route path="/" element={<IndexPage />} />
                <Route path="/room-search" element={<RoomSearch />} />
                <Route path="/rooms" element={<SearchRooms />} />
                <Route path="/rooms/:id" element={<Room />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/feedbacks" element={<Feedbacks />} />
                <Route path="/verify/:token" element={<VerifyEmail />} />
                <Route path="/password-reset" element={<PasswordReset />} />
                <Route path="/set-new-password/:token" element={<SetNewPassword />} />
                <Route path="/*" element={<PageNotFound />} />
            </Routes>
            
            <Footer />
        </>
    )
}