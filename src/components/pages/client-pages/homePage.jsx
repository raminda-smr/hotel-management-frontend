import IndexPage from "./index/indexPage";
import Header from "./parts/header";
import { Routes, Route } from "react-router-dom";
import SearchRooms from "./search-rooms/searchRooms";
import AboutUs from "./about-us/aboutUs";


function HomePage() {

    return (
        <>
            <Header />

            <Routes path="/*">
                <Route path="/" element={<IndexPage />} />
                <Route path="/search-rooms" element={<SearchRooms />} />
                <Route path="/about-us" element={<AboutUs />} />

            </Routes>
            
        </>
    )
}

export default HomePage