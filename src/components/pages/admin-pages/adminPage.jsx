import {  Routes, Route } from 'react-router-dom'

export function AdminPage() {

    return (
        <>
            <div className="w-full h-screen bg-red-900">
                <div>Admin Page</div>

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