import { Routes, Route, useNavigate } from 'react-router-dom'
import Sidebar from "../../components/admin/sidebar/sideBar"
import TopMenu from "../../components/admin/top-menubar/topMenu"
import Bookings from './bookings/bookings'
import Rooms from "./rooms/rooms"
import Categories from "./categories/categories"
import PageNotFound from "../404-page/pageNotFound"
import Users from './users/users'
import Feedbacks from './feedbacks/feedbacks'
import Gallery from './gallery/gallery'
import CategoryCreate from './categories/categoryCreate'
import RoomCreate from './rooms/roomCreate'
import GalleryCreate from './gallery/galleryCreate'
import CategoryUpdate from './categories/categoryUpdate'
import GalleryUpdate from './gallery/galleryUpdate'
import RoomUpdate from './rooms/roomUpdate'
import FeedbackView from './feedbacks/feedbackView'
import FeedbackUpdate from './feedbacks/feedbackUpdate'
import UserCreate from './users/userCreate'
import UserUpdate from './users/userUpdate'
import UserChagePassword from './users/userChagePassword'
import BookingUpdate from './bookings/bookingUpdate'
import BookingView from './bookings/bookingView'
import Dashboard from './dashboard/dashboard'


export default function AdminPage() {

    return (
        <>
            <div className="w-full h-screen flex overflow-hidden">

                <Sidebar />

                <div className='flex-1  '>
                    <TopMenu />

                    <div className="content-area bg-gray-200 overflow-y-scroll h-screen pb-[100px]">
                        <Routes path="/*" >
                            <Route path="/" element={<Dashboard />} />

                            <Route path="/bookings" element={<Bookings />} />
                            <Route path="/bookings/view/:id" element={<BookingView />} />
                            <Route path="/bookings/update" element={<BookingUpdate />} />

                            <Route path="/rooms" element={<Rooms />} />
                            <Route path="/rooms/create" element={<RoomCreate />} />
                            <Route path="/rooms/update" element={<RoomUpdate />} />

                            <Route path="/categories" element={<Categories />} />
                            <Route path="/categories/create" element={<CategoryCreate />} />
                            <Route path="/categories/update" element={<CategoryUpdate />} />

                            <Route path="/users" element={<Users />} />
                            <Route path="/users/create" element={<UserCreate />} />
                            <Route path="/users/update" element={<UserUpdate />} />
                            <Route path="/users/change-password" element={<UserChagePassword />} />

                            <Route path="/feedbacks" element={<Feedbacks />} />
                            <Route path="/feedbacks/view/:id" element={<FeedbackView />} />
                            <Route path="/feedbacks/update" element={<FeedbackUpdate />} />

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