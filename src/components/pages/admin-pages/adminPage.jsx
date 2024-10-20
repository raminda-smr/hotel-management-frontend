import { Routes, Route, Link } from 'react-router-dom'
import SidebarUserData from './parts/sidebarUserData'
import TopMenu from './parts/topMenu'

export function AdminPage() {

    return (
        <>
            <div className="w-full h-screen flex">

                <div className='sidebar w-64 bg-gray-900 p-4'>
                    <SidebarUserData />
                    <div className="sidebar-menu flex flex-col">
                        <Link className='mb-2 text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700' to="/admin/bookings" >Bookings </Link>
                        <Link className='mb-2 text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700' to="/admin/rooms" >Rooms </Link>
                        <Link className='mb-2 text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700' to="/admin/categories" >Categories </Link>
                    </div>

                </div>

                <div className='flex-1 '>
                    <TopMenu/>

                    <div className="content-area p-4">
                        <Routes path="/*" >
                            <Route path="/bookings" element={
                                <div>
                                    <h1>Bookings</h1>
                                </div>
                            }></Route>

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