export default function BookingItem(props) {
    return (
        <div className="booking bg-white   p-1 mb-2 rounded-md flex flex-col">
            <div className="data-row flex justify-between text-white">
                <div className="booking-data flex items-stretch text-sm">
                    <div className="icon bg-blue-500 px-3 py-1 rounded-l-md">Booking</div>
                    <div className="value bg-blue-600 px-3 py-1 rounded-r-md">{props.data.bookingId}</div>
                </div>

                <div className="booking-data flex items-stretch text-sm">
                    <div className="icon bg-amber-500 px-3 py-1 rounded-l-md">Room</div>
                    <div className="value bg-amber-600 px-3 py-1 rounded-r-md">{props.data.roomId}</div>
                </div>
            </div>

            <table className="min-w-full bg-white border border-gray-300 shadow-lg text-sm mt-1">
                <tbody>
                    <tr className="border-b">
                        <td className="px-2 py-1 text-left font-semibold text-gray-600 bg-gray-100">Email</td>
                        <td className="px-2 py-1 text-gray-800">{props.data.email}</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-1 text-left font-semibold text-gray-600 bg-gray-100">Phone</td>
                        <td className="px-2 py-1 text-gray-800">{props.data.phone}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
