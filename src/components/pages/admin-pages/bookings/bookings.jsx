import { CiHome } from "react-icons/ci"
import { TfiAngleRight } from "react-icons/tfi"

const bookings = [
    {
        "bookingId": 1201,
        "roomId": 101,
        "email": "john.doe@example.com",
        "phone": "123-456-7890",
        "status": "pending",
        "reason": "Vacation",
        "start": "2024-10-25T00:00:00.000Z",
        "end": "2024-10-30T00:00:00.000Z",
        "note": "No special requests",
        "timestamp": "2024-10-20T14:35:00.000Z"
    },
    {
        "bookingId": 1202,
        "roomId": 102,
        "email": "jane.smith@example.com",
        "phone": "987-654-3210",
        "status": "confirmed",
        "reason": "Business trip",
        "start": "2024-11-01T00:00:00.000Z",
        "end": "2024-11-05T00:00:00.000Z",
        "note": "Late check-in requested",
        "timestamp": "2024-10-21T09:00:00.000Z"
    },
    {
        "bookingId": 1203,
        "roomId": 103,
        "email": "alice.wonderland@example.com",
        "phone": "555-123-4567",
        "status": "canceled",
        "reason": "Change of plans",
        "start": "2024-12-01T00:00:00.000Z",
        "end": "2024-12-10T00:00:00.000Z",
        "note": "N/A",
        "timestamp": "2024-10-22T15:45:00.000Z"
    }
]


function Bookings() {

    return (
        <>
            <div className="page-header mb-6 ">
                <h2 className="text-gray-700 text-2xl mb-2">Bookings</h2>
                <div className="path flex items-center text-sm border-b border-gray-300 pb-3 text-gray-500">
                    <span ><CiHome /></span> <TfiAngleRight />
                    <span >Admin</span><TfiAngleRight />
                    <span >Bookings</span>
                </div>
            </div>


            <div className="booking-data">
                <table class="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr class="bg-gray-50 border-b">
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room ID</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(
                                (booking, index) => {
                                    return (
                                        <tr key={index}  class="border-b">
                                            <td class="px-6 py-4 text-sm text-gray-700">{booking.bookingId}</td>
                                            <td class="px-6 py-4 text-sm text-gray-700">{booking.roomId}</td>
                                            <td class="px-6 py-4 text-sm text-gray-700">{booking.email}</td>
                                            <td class="px-6 py-4 text-sm text-gray-700">{booking.phone}</td>
                                            <td class="px-6 py-4 text-sm text-gray-700">{booking.status}</td>
                                            <td class="px-6 py-4 text-sm text-gray-700">{booking.start}</td>
                                            <td class="px-6 py-4 text-sm text-gray-700">{booking.end}</td>
                                            <td class="px-6 py-4 text-sm text-gray-700">Edit</td>
                                        </tr>
                                    )
                                }
                            )
                        }

                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Bookings