import { useContext, useEffect, useState } from 'react';
import { CiShoppingCart, CiUnlock } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import UserContext from '../../../context/userContext';

export default function Cart(props) {

    const { user } = useContext(UserContext)
    const [dateCount, setDateCount] = useState(0)
    const [total, setTotal] = useState(0)
        
    let myCart = JSON.parse(localStorage.getItem('cart')) || [];
   

    function getSelectedDatesCount() {
        const searchData = JSON.parse(localStorage.getItem("searchData"));
    
        if (!searchData || !searchData.start || !searchData.end) {
            console.error("Invalid searchData or missing dates.");
            return 0; 
        }
    
        const startDate = new Date(searchData.start);
        const endDate = new Date(searchData.end);
    
        if (isNaN(startDate) || isNaN(endDate)) {
            console.error("Invalid date format in searchData.");
            return 0;
        }
    
        const differenceInTime = endDate - startDate;
    
        const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
    
        return differenceInDays > 0 ? differenceInDays : 0;
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

    function calculateTotal(){
        
    }

    useEffect(()=>{
        setDateCount(getSelectedDatesCount())
        calculateTotal()
    }, [props.cartChanged])

    return (
        <div className="cart bg-gray-200 border border-gray-300 rounded-lg p-4">
            <h3 className="text-gray-500  flex items-center justify-center pb-4">
                <CiShoppingCart className="text-4xl mr-2" />
                <span className="uppercase text-2xl">Your Cart</span>
            </h3>

            <div className="cart-body w-full border-t border-gray-300 ">

                {user ? (
                    <div className="cart-data mt-3">
                      { myCart && myCart.length > 0 && (
                            myCart.map((item, index)=> (
                                <div key={index} className='p-4 bg-gray-50 mb-2 flex justify-between rounded'>
                                    <div className="product">
                                        <div className="title font-semibold text-gray-500">{item.category.name} Room</div>
                                        <div className="room text-sm text-gray-500 ">Room No: {item.roomNumber}</div>
                                    </div>
                                    <div className="per-night text-right">
                                        <div className="unit-cost font-semibold text-gray-500">LKR {item.category.price} X {dateCount}</div>
                                        <div className="sub-total text-lg font-bold text-amber-500"> LKR {item.category.price * dateCount}  </div>
                                        <div className="remove-item text-xs text-red-500 cursor-pointer" onClick={(e) => toggleCart(item) }>Remove</div>
                                    </div>
                                </div>
                            ))
                      )}  

                        <div className="total flex justify-between bg-white p-2">
                            <div className="title">
                                <h5 className='text-lg font-semibold'>Total</h5>
                            </div>
                            <div className="price">
                                <h5 className='text-lg font-semibold'>Total</h5>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="login-message flex flex-col justify-center text-center pt-5">

                        <div className="text-8xl mx-auto text-gray-300 ">
                            <CiUnlock />
                        </div>

                        <p className="text-gray-500 mb-4">Please <Link to="/login" className="underline text-red-700">login</Link> or <Link to="/register" className="underline text-red-700">register</Link> in order to continue </p>

                    </div>
                )}


            </div>
        </div>
    )
}
