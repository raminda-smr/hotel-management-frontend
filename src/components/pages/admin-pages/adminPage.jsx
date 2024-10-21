import { Routes, Route } from 'react-router-dom'
import SidebarUserData from './parts/sidebarUserData'
import TopMenu from './parts/topMenu'
import Sidebar from './parts/sideBar'
import Dashboard from './dashboard/Dashboard'
import Bookings from './bookings/Bookings'
import Rooms from './rooms/rooms'
import Categories from './categories/categories'
import PageNotFound from '../error-pages/pageNotFound'
import Users from './users/users'

export function AdminPage() {

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

                            <Route path="/*" element={<PageNotFound />} />

                        </Routes>
                    </div>
                </div>




            </div>
        </>
    )
}