import { Routes, Route } from 'react-router-dom'
import SidebarUserData from "../../components/admin/sidebar-user-data/sidebarUserData"
import Sidebar from "../../components/admin/sidebar/sideBar"
import TopMenu from "../../components/admin/top-menubar/topMenu"
import Dashboard from "../../components/admin/dashboard/dashboard"
import Bookings from './bookings'
import Rooms from "./rooms"
import Categories from "./categories"
import Gallery from "../../components/admin/gallery/gallery"
import PageNotFound from "../404-page/pageNotFound"
import Users from './users'
import Feedbacks from './feedbacks'



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

                    <div className="content-area p-4 pt-2 overflow-y-scroll h-screen">
                        <Routes path="/*" >
                            <Route path="/" element={<Dashboard />} />

                            <Route path="/bookings" element={<Bookings />} />

                            <Route path="/rooms" element={<Rooms />} />

                            <Route path="/categories" element={<Categories />} />

                            <Route path="/users" element={<Users />} />

                            <Route path="/feedbacks" element={<Feedbacks />} />

                            <Route path="/gallery" element={<Gallery />} />

                            <Route path="/*" element={<PageNotFound />} />

                        </Routes>
                    </div>
                </div>




            </div>
        </>
    )
}