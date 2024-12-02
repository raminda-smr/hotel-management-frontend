import { useContext, useEffect, useState } from 'react'
import { CiLocationArrow1, CiShoppingCart, CiUnlock } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import UserContext from '../../../context/userContext'
import axios from 'axios'

export default function Cart(props) {

    const { user } = useContext(UserContext)
    const [dateCount, setDateCount] = useState(0)
    const [total, setTotal] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const cartDate = JSON.parse(localStorage.getItem("searchData"))

    let myCart = JSON.parse(localStorage.getItem('cart')) || []


    function getSelectedDatesCount() {
        const searchData = JSON.parse(localStorage.getItem("searchData"))

        if (!searchData || !searchData.start || !searchData.end) {
            console.error("Invalid searchData or missing dates.")
            return 0
        }

        const startDate = new Date(searchData.start)
        const endDate = new Date(searchData.end)

        if (isNaN(startDate) || isNaN(endDate)) {
            console.error("Invalid date format in searchData.")
            return 0
        }

        const differenceInTime = endDate - startDate
        const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24))

        return differenceInDays > 0 ? differenceInDays : 0
    }

    function toggleCart(room) {
        let cart = JSON.parse(localStorage.getItem('cart')) || []
        const roomIndex = cart.findIndex(cartRoom => cartRoom.roomNumber === room.roomNumber)

        if (roomIndex !== -1) {
            cart.splice(roomIndex, 1)
        } else {
            cart.push(room)
        }

        localStorage.setItem('cart', JSON.stringify(cart))
        props.setCartChanged(props.cartChanged + 1)
    }

    function calculateTotal() {
        const cart = JSON.parse(localStorage.getItem('cart')) || []
        let totalAmount = 0

        if (cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                totalAmount += cart[i].category.price * dateCount
            }
        }

        setTotal(totalAmount)

    }

    useEffect(() => {
        setDateCount(getSelectedDatesCount())
        calculateTotal()
    }, [props.cartChanged, dateCount])

    function handleCartSubmit(e) {
        e.preventDefault()

        if (isLoading) {
            return
        }
        else {
            setIsLoading(true)
        }

        const dates = JSON.parse(localStorage.getItem("searchData")) || null
        const cart = JSON.parse(localStorage.getItem('cart')) || []
        const token = localStorage.getItem('token')

        if (dates != null && cart.length > 0 && token != null) {

            const roomNumbers = cart.map(item => item.roomNumber);

            axios.post(import.meta.env.VITE_BACKEND_URL + '/api/bookings',
                {
                    startDate: dates.start,
                    endDate: dates.end,
                    cart: roomNumbers
                },
                {
                    headers: {
                        "Authorization": 'Bearer ' + token,
                        "Content-Type": "application/json"
                    }
                }
            )
                .then(
                    (res) => {
                        if (res) {
                            console.log(res.data)
                        }
                    }
                )
                .catch(
                    err =>{
                        if(err){
                            if(err.status = 403){
                                
                            }
                        }
                    }
                )
        }

    }

    return (
        <div className="cart bg-gray-700 border border-gray-300 rounded-lg p-4">
            <h3 className="text-gray-50  flex items-center justify-center pb-4">
                <CiShoppingCart className="text-4xl mr-2" />
                <span className="uppercase text-2xl font-bold">Your Cart</span>
            </h3>

            <div className="cart-body w-full border-t border-gray-600 ">

                {user ? (
                    <div className="cart-data mt-4">
                        {myCart && myCart.length > 0 && (
                            myCart.map((item, index) => (
                                <div key={index} className='p-4 bg-gray-50 mb-2 flex justify-between rounded'>
                                    <div className="product">
                                        <div className="title font-semibold text-gray-500">{item.category.name} Room</div>
                                        <div className="room text-sm text-gray-500 ">Room No: {item.roomNumber}</div>
                                        <div className="dates text-xs text-gray-400 ">{cartDate.start} to {cartDate.end}</div>
                                    </div>
                                    <div className="per-night text-right">
                                        <div className="unit-cost font-semibold text-gray-500">LKR {item.category.price} X {dateCount}</div>
                                        <div className="sub-total text-lg font-bold text-amber-500"> LKR {item.category.price * dateCount}  </div>
                                        <div className="remove-item text-xs text-red-500 cursor-pointer" onClick={(e) => toggleCart(item)}>Remove</div>
                                    </div>
                                </div>
                            ))
                        )}

                        <div className="total flex justify-between bg-white p-4 rounded">
                            <div className="title">
                                <h5 className='text-lg font-semibold text-gray-700'>Total</h5>
                            </div>
                            <div className="price">
                                <h5 className='text-lg font-semibold text-gray-700'>LKR {total}</h5>
                            </div>
                        </div>

                        <div className="submit flex justify-end mt-2">
                            <button className="submit-request flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-amber-500" onClick={(e) => { handleCartSubmit(e) }}>
                                <CiLocationArrow1 className='text-2xl font-semibold mr-1' />
                                <span>Submit Request</span>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="login-message flex flex-col justify-center text-center pt-5">

                        <div className="text-8xl mx-auto text-gray-300 ">
                            <CiUnlock />
                        </div>

                        <p className="text-gray-300 mb-4">Please <Link to="/login" className="underline text-red-400">login</Link> or <Link to="/register" className="underline text-red-400">register</Link> in order to continue </p>

                    </div>
                )}


            </div>
        </div>
    )
}
