import axios from "axios"
import toast from "react-hot-toast"
import { useEffect, useState } from "react"
import { getDownloadURL } from "firebase/storage"
import { useLocation, useNavigate } from "react-router-dom"
import { MdOutlineArrowBack } from "react-icons/md"
import PageHeader from "../../../components/admin/page-header/pageHeader"
import PageHeaderButton from "../../../components/admin/page-header/pageHeaderButton"
import Input from "../../../components/common/input/input"
import FileSelector from "../../../components/common/file-selector/fileSelector"
import Textarea from "../../../components/common/textarea/textarea"
import uploadMedia from "../../../utils/mediaUpload"
import Select from "../../../components/common/select/select"




export default function BookingUpdate(props) {

    const token = localStorage.getItem("token")
    if (token == null) {
        window.location.href = "/login"
    }

    const location = useLocation()
    const navigate = useNavigate()

    if (location.state == null) {
        window.location.href = "/admin/bookings"
    }

    const initialBooking = {
        bookingId: location.state.bookingId,
        roomId: location.state.roomId,
        email: location.state.email,
        phone: location.state.phone,
        status: location.state.status,
        reason: location.state.reason,
        start: location.state.start.split('T')[0],
        end: location.state.end.split('T')[0],
        note: location.state.note,
        timestamp: location.state.timestamp
    }

    const [booking, setBooking] = useState(initialBooking)
    const [isLoading, setIsLoading] = useState(false)

    const [rooms, setRooms] = useState([])
    const [isRoomsLoaded, setIsRoomLoaded] = useState(false)

    useEffect(() => {
        if (!isRoomsLoaded) {
            axios.get(import.meta.env.VITE_BACKEND_URL + '/api/rooms', {}).then(
                (res) => {
                    // console.log(res)
                    setRooms(res.data.list)
                    setIsRoomLoaded(true)
                }
            )
        }
    }, [isRoomsLoaded])

    const bookingStatus = [
        {"value": "pending", "label": "Pending"},
        {"value": "deleted", "label": "Deleted"},
        {"value": "approved", "label": "Approved (not-paid)"},
        {"value": "paid", "label": "Paid"},
        {"value": "completed", "label": "Completed"},
        {"value": "canceled", "label": "Canceled"}
    ] 


    function handleChange(e) {
        const { name, value } = e.target
        setBooking((prevData) => ({ ...prevData, [name]: value }))
    }

    
    // send back
    function goBack() {
        navigate("/admin/bookings")
    }


    function resetForm() {
        goBack()
    }


    function updateBooking(url) {

        axios.put(import.meta.env.VITE_BACKEND_URL + '/api/bookings/' + initialBooking.bookingId, booking, {
            headers: {
                "Authorization": 'Bearer ' + token,
                "Content-Type": "application/json"
            }
        }).then(
            (res) => {
                toast.success('Booking successfully updated!');
                resetForm()
            }
        ).catch(
            (error) => {
                toast.error("Failed to update booking.");
            }
        )
    }


    function handleSubmit(e) {
        e.preventDefault()

        if (isLoading) {
            // prevent button click while form processing
            return
        } else {
            // set form loading state
            setIsLoading(true)
        }

        updateBooking()
        
    }


    return (
        <>
            <PageHeader to="/admin/bookings" name="Bookings" title="Update booking" >
                <PageHeaderButton onClick={goBack}>
                    <MdOutlineArrowBack className='text-2xl ' />
                    <span className='text-base pr-2'>Back</span>
                </PageHeaderButton>
            </PageHeader>

            <div className="form-container flex justify-center mt-8">
                <form onSubmit={handleSubmit} className="bg-white min-w-[450px] shadow-md p-5 rounded-md border-t-4 border-blue-500" action="">

                    <h3 className="text-lg font-medium mb-3">Update Booking</h3>

                    <Input name="bookingId" required="required" value={booking.bookingId} label="Booking Id*" disabled />

                    <Select name="roomId" required="required" label="Room ID*" value={booking.roomId} onChange={handleChange} >
                        <option value="">Select a Room</option>
                        {rooms.map((item, index) =>
                            <option key={index} value={item.roomNumber} >{item.roomNumber}</option>
                        )}
                    </Select>

                    <Input name="email" required="required" value={booking.email} label="Email*" onChange={handleChange} />

                    <Input name="phone" type="telephone" value={booking.phone} label="Phone" onChange={handleChange} />

                    <Select name="status" required="required" label="Status*" value={booking.status} onChange={handleChange} >
                        <option value="">Select a status</option>
                        {bookingStatus.map((item, index) =>
                            <option key={index} value={item.value} >{item.label}</option>
                        )}
                    </Select>

                    <Textarea name="reason" value={booking.reason} label="Reason*" onChange={handleChange} ></Textarea>


                    <Input name="start" type="date" value={booking.start} onChange={handleChange} label="Start Date*" />

                    <Input name="end" type="date" value={booking.end} onChange={handleChange} label="End Date*" />

                    <Textarea name="note"  value={booking.note} label="Note" onChange={handleChange} ></Textarea>

                    <button type="submit" className="w-full bg-blue-500 text-white rounded-md font-medium px-4 py-2 mt-2 flex justify-center hover:bg-blue-600" >
                        {
                            isLoading ?
                                (<div className="border-2 border-t-white w-[20px] h-[20px] rounded-full animate-spin"></div>)
                                :
                                (<span> Update Booking</span>)
                        }
                    </button>
                </form>
            </div>

        </>
    )
}
