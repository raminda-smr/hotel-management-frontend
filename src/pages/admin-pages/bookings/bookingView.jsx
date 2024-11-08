import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import PageHeader from "../../../components/admin/page-header/pageHeader";
import PageHeaderButton from "../../../components/admin/page-header/pageHeaderButton";


export default function BookingView() {

    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    if (token == null) {
        window.location.href = "/login"
    }

    const [booking, setBooking] = useState()

    // get browser parameter
    const { id } = useParams()

    useEffect(() => {
        if (id != null) {
            axios.get(import.meta.env.VITE_BACKEND_URL + '/api/bookings/' + id, {
                headers: {
                    "Authorization": 'Bearer ' + token,
                    "Content-Type": "application/json"
                }
            }).then(
                (res) => {
                    setBooking(res.data.booking)
                }
            ).catch(
                (err) => {
                    // goBack()
                }
            )
        }
        else {
            goBack()
        }
    }, [])

    // send back
    function goBack() {
        navigate("/admin/bookings")
    }


    return (
        <>
            <PageHeader to="/admin/bookings" name="Bookings" title="View booking" >
                <PageHeaderButton onClick={goBack}>
                    <MdOutlineArrowBack className='text-2xl ' />
                    <span className='text-base pr-2'>Back</span>
                </PageHeaderButton>
            </PageHeader>

            <div className="flex justify-center mt-8">

                {booking && (
                    <div className="bg-white w-[450px] shadow-md p-5 rounded-md border-t-4 border-blue-500">

                        <h3 className="text-lg font-medium mb-5  ">Booking</h3>

                        <h4 className="text-lg text-gray-700 text-center pb-2 mb-3 border-b border-gray-300">Booking ID: 
                            <span className="bg-blue-600 text-white font-medium px-3 py-1 ml-1 rounded-md">{booking.bookingId}</span>
                            </h4>

                        <p className="flex justify-center items-center text-sm mt-2 mb-3">
                            <span className=" bg-teal-800 text-white px-3 py-1 rounded-l-md"><FaRegCalendarCheck className="inline-block" /></span>
                            <span className="bg-teal-700 text-white py-1 px-3 rounded-r-md">
                                FROM <span className="text-amber-400">{booking.start.split('T')[0]} </span>
                                TO <span className="text-amber-400">{booking.end.split('T')[0]}</span> </span>
                                
                        </p>

                        <table className="w-full text-left border-collapse">
                            <tbody>
                                <tr className="border-b">
                                    <td className="px-4 py-2 font-semibold text-gray-600">Room ID</td>
                                    <td className="px-4 py-2 text-gray-800">
                                        <span className="bg-amber-600 text-white px-2 py-1 rounded-md">{booking.roomId}</span>
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="px-4 py-2 font-semibold text-gray-600">Email</td>
                                    <td className="px-4 py-2 text-gray-800">{booking.email}</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="px-4 py-2 font-semibold text-gray-600">Phone</td>
                                    <td className="px-4 py-2 text-gray-800">{booking.phone}</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="px-4 py-2 font-semibold text-gray-600">Status</td>
                                    <td className="px-4 py-2 text-gray-800">{booking.status}</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="px-4 py-2 font-semibold text-gray-600">Reason</td>
                                    <td className="px-4 py-2 text-gray-800">{booking.reason}</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="px-4 py-2 font-semibold text-gray-600">Note</td>
                                    <td className="px-4 py-2 text-gray-800">{booking.note}</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 font-semibold text-gray-600">Generated at</td>
                                    <td className="px-4 py-2 text-gray-800">{booking.timestamp}</td>
                                </tr>
                            </tbody>
                        </table>

                        


                    </div>
                )}

            </div>
        </>
    )
}
