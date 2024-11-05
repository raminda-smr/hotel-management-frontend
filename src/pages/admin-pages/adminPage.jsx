import { Routes, Route } from 'react-router-dom'
import SidebarUserData from "../../components/admin/sidebar-user-data/sidebarUserData"
import Sidebar from "../../components/admin/sidebar/sideBar"
import TopMenu from "../../components/admin/top-menubar/topMenu"
import Dashboard from "../../components/admin/dashboard/dashboard"
import Bookings from './bookings'
import Rooms from "./rooms/rooms"
import Categories from "./categories/categories"
import PageNotFound from "../404-page/pageNotFound"
import Users from './users'
import Feedbacks from './feedbacks'
import Gallery from './gallery/gallery'
import CategoryCreate from './categories/categoryCreate'
import RoomCreate from './rooms/roomCreate'
import GalleryCreate from './gallery/galleryCreate'
import CategoryUpdate from './categories/categoryUpdate'
import GalleryUpdate from './gallery/galleryUpdate'
import RoomUpdate from './rooms/roomUpdate'



export default function AdminPage() {

    return (
        <>
            <div className="w-full h-screen flex overflow-hidden">

                <div className='sidebar w-64 bg-gray-900 p-4'>
                    <SidebarUserData />
                    <Sidebar />

                </div>

                <div className='flex-1  '>
                    <TopMenu/>

                    <div className="content-area p-4 pt-2 overflow-y-scroll h-screen pb-[100px]">
                        <Routes path="/*" >
                            <Route path="/" element={<Dashboard />} />

                            <Route path="/bookings" element={<Bookings />} />

                            <Route path="/rooms" element={<Rooms />} />
                            <Route path="/rooms/create" element={<RoomCreate />} />
                            <Route path="/rooms/update" element={<RoomUpdate />} />

                            <Route path="/categories" element={<Categories />} />
                            <Route path="/categories/create" element={<CategoryCreate />} />
                            <Route path="/categories/update" element={<CategoryUpdate />} />

                            <Route path="/users" element={<Users />} />

                            <Route path="/feedbacks" element={<Feedbacks />} />

                            <Route path="/gallery" element={<Gallery />} />
                            <Route path="/gallery/create" element={<GalleryCreate />} />
                            <Route path="/gallery/update" element={<GalleryUpdate />} />

                            <Route path="/*" element={<PageNotFound />} />

                        </Routes>
                    </div>
                </div>




            </div>
        </>
    )
}