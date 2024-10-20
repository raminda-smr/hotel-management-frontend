import { Routes, Route, Link } from 'react-router-dom'

export function AdminPage() {

    return (
        <>
            <div className="w-full h-screen bg-red-100">
                <div>
                    <Link className='mr-2' to="/admin/bookings" >Bookings </Link>
                    <Link className='mr-2' to="/admin/rooms" >Rooms </Link>
                    <Link className='mr-2' to="/admin/categories" >Categories </Link>
                </div>

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
        </>
    )
}