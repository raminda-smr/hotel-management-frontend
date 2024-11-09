import { CiBookmarkCheck, CiCalendar, CiCalendarDate, CiChat2, CiHome, CiImageOn, CiShirt, CiUser, CiViewTable } from "react-icons/ci"
import PageHeader from "../../../components/admin/page-header/pageHeader"
import { PiClockClockwise } from "react-icons/pi"
import BookingItem from "./bookingItem"
import ModuleStat from "./moduleStats"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import BookingCountItem from "./bookingCountItem"


function Dashboard() {

    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    if (token == null) {
        window.location.href = "/login"
    }

    const [isModuleDataLoaded, setIsModuleDataLoaded] = useState(false)
    const [moduleStats, setModuleStats] = useState(null)

    const [isBookingDataLoaded, setIsBookingDataLoaded] = useState(false)
    const [bookingData, setBookingData] = useState(null)

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + "/api/stats/get-module-stats", {}, {
            headers: {
                "Authorization": 'Bearer ' + token,
                "Content-Type": "application/json"
            }
        }).then(
            (res) => {
                setModuleStats(res.data)
                setIsModuleDataLoaded(true)
            }
        )
    }, [isModuleDataLoaded])


    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + "/api/stats/get-dashboad-booking-data", {}, {
            headers: {
                "Authorization": 'Bearer ' + token,
                "Content-Type": "application/json"
            }
        }).then(
            (res) => {
                setBookingData(res.data)
                setIsBookingDataLoaded(true)
            }
        )
    }, [isBookingDataLoaded])

    return (
        <>
            <PageHeader to="/admin" name="Dashboard" title="Dashboard" />

            <div className="dashboard-data p-4">
                {
                    isModuleDataLoaded && (
                        <div className="flex mb-5 gap-5">
                            <ModuleStat to="/admin/bookings" icon={<CiBookmarkCheck />} title="Bookings" count={moduleStats.bookingCount} className="bg-amber-700" />

                            <ModuleStat to="/admin/categories" icon={<CiViewTable />} title="Categories" count={moduleStats.categoriesCount} className="bg-teal-600" />

                            <ModuleStat to="/admin/rooms" icon={<CiHome />} title="Rooms" count={moduleStats.roomsCount} className="bg-green-600" />

                            <ModuleStat to="/admin/users" icon={<CiUser />} title="Customers" count={moduleStats.customersCount} className="bg-cyan-600" />

                            <ModuleStat to="/admin/users" icon={<CiShirt />} title="Admins" count={moduleStats.adminsCount} className="bg-violet-500" />

                            <ModuleStat to="/admin/feedbacks" icon={<CiChat2 />} title="Feedbacks" count={moduleStats.feedbacksCount} className="bg-pink-500" />

                            <ModuleStat to="/admin/gallery" icon={<CiImageOn />} title="Gallery Items" count={moduleStats.galleryItemsCount} className="bg-rose-500" />
                        </div>

                    )
                }

                {
                    isBookingDataLoaded && (

                        <div className="flex gap-5">

                            <div className="bg-amber-600 w-full p-4 rounded">
                                <h2 className="text-5xl text-white flex items-center border-b border-white pb-2 mb-4">
                                    <CiBookmarkCheck />
                                    <span className="text-2xl ml-1">Bookings</span>
                                </h2>

                                <BookingCountItem title="Today's Bookings" data={bookingData.todaysBookingsCount}  />
                                <BookingCountItem title="Upcoming Bookings" data={bookingData.upcomingBookingsCount}  />
                                <BookingCountItem title="Completed Bookings" data={bookingData.completedBookingsCount}  />
                                <BookingCountItem title="Total Bookings" data={bookingData.totaldBookingsCount}  />
                                
                            </div>

                            <div className="bg-amber-700 w-full  p-4 rounded">
                                <h2 className="text-5xl text-white flex items-center border-b border-white pb-2 mb-4">
                                    <CiCalendarDate /> <span className="text-2xl  ml-1">Today's Bookings</span>
                                </h2>
                                {
                                    bookingData.todaysBookings.count > 0 &&
                                    bookingData.todaysBookings.map(
                                        (item, index) =>  <BookingItem data={item} key={index} />
                                    )
                                }
                               


                            </div>

                            <div className="bg-amber-800 w-full p-4 rounded">
                                <h2 className="text-5xl text-white flex items-center border-b border-white pb-2 mb-4">
                                    <PiClockClockwise /> <span className="text-2xl  ml-1">Tomorrow's Bookings</span>
                                </h2>

                                {
                                    bookingData.tomorrowsBookings.count > 0 &&
                                    bookingData.tomorrowsBookings.map(
                                        (item, index) =>  <BookingItem data={item} key={index} />
                                    )
                                }

                            </div>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default Dashboard