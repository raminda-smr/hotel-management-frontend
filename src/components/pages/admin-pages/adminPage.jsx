import { Routes, Route } from 'react-router-dom'
import SidebarUserData from './parts/sidebarUserData'
import TopMenu from './parts/topMenu'
import Sidebar from './parts/sideBar'
import Dashboard from './dashboard/Dashboard'
import Bookings from './bookings/Bookings'

export function AdminPage() {

    return (
        <>
            <div className="w-full h-screen flex">

                <div className='sidebar w-64 bg-gray-900 p-4'>
                    <SidebarUserData />
                    <Sidebar />

                </div>

                <div className='flex-1 '>
                    <TopMenu/>

                    <div className="content-area p-4">
                        <Routes path="/*" >
                            <Route path="/" element={<Dashboard />} />

                            <Route path="/bookings" element={<Bookings />} />

                            <Route path="/rooms" element={
                                <div>
                                    <h1>Rooms</h1>
                                </div>
                            }></Route>

                            <Route path="/categories" element={
                                <div>
                                    <h1>Categories</h1>
                                </div>
                            }></Route>

                            <Route path="/*" element={
                                <div>
                                    <h1>404</h1>
                                </div>
                            }></Route>

                        </Routes>
                    </div>
                </div>




            </div>
        </>
    )
}