import { CiBookmarkCheck, CiCalendar, CiCalendarDate, CiChat2, CiHome, CiImageOn, CiShirt, CiUser, CiViewTable } from "react-icons/ci"
import PageHeader from "../../../components/admin/page-header/pageHeader"
import { PiClockClockwise } from "react-icons/pi"
import BookingItem from "./bookingItem"
import ModuleStat from "./moduleStats"


function Dashboard() {

    return (
        <>
            <PageHeader to="/admin" name="Dashboard" title="Dashboard" />

            <div className="dashboard-data p-4">


                <div className="flex mb-4 gap-5">
                    <ModuleStat to="/admin/bookings" icon={<CiBookmarkCheck />} title="Bookings" count="300" className="bg-amber-700" />
                    <ModuleStat to="/admin/categories" icon={<CiViewTable />} title="Categories" count="300" className="bg-teal-600" />
                    <ModuleStat to="/admin/rooms" icon={<CiHome />} title="Rooms" count="300" className="bg-green-600" />
                    <ModuleStat to="/admin/users" icon={<CiUser />} title="Customers" count="300" className="bg-cyan-600" />
                    <ModuleStat to="/admin/users" icon={<CiShirt />} title="Admins" count="300" className="bg-violet-500" />
                    <ModuleStat to="/admin/feedbacks" icon={<CiChat2 />} title="Feedbacks" count="300" className="bg-pink-500" />
                    <ModuleStat to="/admin/gallery" icon={<CiImageOn />} title="Gallery Items" count="300" className="bg-rose-500" />
                </div>

                <div className="flex gap-5">

                    <div className="bg-amber-600 w-full p-4 rounded">
                        <h2 className="text-5xl text-white flex items-center border-b border-white pb-2 mb-4">
                            <CiBookmarkCheck /> 
                            <span className="text-2xl ml-1">Bookings</span> 
                        </h2>

                        

                        <p className="bg-amber-400  p-1 px-3 mb-1 rounded-md"> Today's Bookings
                            <span className="bg-amber-400 px-2 py-0 ml-2 rounded-sm text-black">2</span>
                        </p>
                        <p className="bg-amber-400  p-1 px-3 mb-1 rounded-md"> Upcoming Bookings
                            <span className="bg-amber-300 px-2 py-0 ml-2 rounded-sm text-black">30</span>
                        </p>
                        <p className="bg-amber-400  p-1 px-3 mb-1 rounded-md"> Completed Bookings
                            <span className="bg-green-300 px-2 py-0 ml-2 rounded-sm text-black">100</span>
                        </p>
                        <p className="bg-amber-400  p-1 px-3 mb-1 rounded-md"> Total Bookings
                            <span className="bg-blue-300 px-2 py-0 ml-2 rounded-sm text-black">310</span>
                        </p>
                    </div>

                    <div className="bg-amber-700 w-full  p-4 rounded">
                        <h2 className="text-5xl text-white flex items-center border-b border-white pb-2 mb-4">
                            <CiCalendarDate /> <span className="text-2xl  ml-1">Today's Bookings</span>
                        </h2>

                        <BookingItem />
                        <BookingItem />

                        
                    </div>

                    <div className="bg-amber-800 w-full p-4 rounded">
                        <h2 className="text-5xl text-white flex items-center border-b border-white pb-2 mb-4">
                            <PiClockClockwise /> <span className="text-2xl  ml-1">Tomorrow's Bookings</span>
                        </h2>

                        <BookingItem />

                        <BookingItem />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard