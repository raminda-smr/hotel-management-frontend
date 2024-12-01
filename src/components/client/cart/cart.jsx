import { CiShoppingCart, CiUnlock } from 'react-icons/ci'
import { Link } from 'react-router-dom'

export default function Cart() {
    
    let myCart = JSON.parse(localStorage.getItem('cart')) || [];

    return (
        <div className="cart bg-gray-200 border border-gray-300 rounded-lg p-4">
            <h3 className="text-gray-500  flex items-center justify-center pb-4">
                <CiShoppingCart className="text-4xl mr-2" />
                <span className="uppercase text-2xl">Your Cart</span>
            </h3>

            <div className="cart-body w-full border-t border-gray-300 ">

                <div className="login-message flex flex-col justify-center text-center pt-5">

                    <div className="text-8xl mx-auto text-gray-300 ">
                        <CiUnlock />
                    </div>

                    <p className="text-gray-500 mb-4">Please <Link to="/login" className="underline text-red-700">login</Link> or <Link to="/register" className="underline text-red-700">register</Link> in order to continue </p>

                </div>

            </div>
        </div>
    )
}
