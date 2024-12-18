import { useContext, useState } from "react"
import UserContext from "../../../context/userContext"
import { CiShoppingCart } from "react-icons/ci"

export default function Room(props) {

    const { user } = useContext(UserContext)

    const room = props.room
    let addButton = ""
    let myCart = JSON.parse(localStorage.getItem('cart')) || [];

    const description = room.description || room.category.description


    function truncateText(text, maxLength) {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + "...";
        }
        return text;
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

    function openPageInNewTab(roomNumber){
        window.open("/rooms/" + roomNumber, "_blank");
    };



    if (user &&
        user.type == "customer" &&
        (myCart.findIndex(cartRoom => cartRoom.roomNumber == room.roomNumber) === -1)
    ) {
        addButton = (
            <button className="bg-blue-500 text-white px-4 py-1 ml-1 flex items-center rounded hover:bg-amber-500" onClick={(e) => { toggleCart(room) }}>
                <CiShoppingCart className="text-2xl mr-1" />
                <span>Add to cart</span>
            </button>
        )
    }
    else if (user && user.type == "customer") {
        addButton = (
            <button className="bg-amber-500 text-white px-4 py-1 ml-1 flex items-center rounded hover:bg-sky-500" onClick={(e) => { toggleCart(room) }}>
                <CiShoppingCart className="text-2xl mr-1" />
                <span>Remove from cart</span>
            </button>
        )
    }




    return (
        <div className="room flex border bg-slate-200 border-gray-300 rounded-lg mb-3 ">
            <div className="image w-2/5 p-2 ">
                <img src={room.category.image} alt="" className="rounded-lg overflow-hidden" />
            </div>
            <div className="data w-3/5 p-2">
                <div className="header flex justify-between">
                    <div className="title">
                        <h3 className="text-xl mt-2 uppercase font-semibold text-gray-500 bg-blue-500 rounded">
                            <span className="mr-1 px-2 py-1  text-gray-100">{room.category.name}</span>
                            <span className="bg-sky-400 text-white px-4 py-2 -m-1 inline-block rounded">{room.roomNumber}</span>
                        </h3>

                    </div>
                    <div className="price">
                        <h3 className="text-2xl mt-2  text-gray-500">
                            <span className="text-sm">LKR</span>
                            <span className="text-red-500">{room.category.price}</span>
                            <span className="text-sm text-amber-600">/night</span>
                        </h3>
                    </div>
                </div>

                <p className="text-sm mt-2 pt-2 border-t border-gray-300 text-gray-500">Max Guests: {room.maxGuests}</p>
                <p className="text-sm mt-2 text-gray-500">{truncateText(description, 100)}</p>

                <p>
                    {room.category.features.map((feature, index) => (<span key={index} className="bg-gray-300 inline-block mr-1 mb-1 px-2 py-1 text-xs text-gray-500 rounded">{feature}</span>))}
                </p>

                <div className="flex justify-end">
                    <div className="view bg-blue-500 text-white px-4 py-1 flex items-center rounded hover:bg-amber-500" onClick={(e)=>{openPageInNewTab(room.roomNumber)}}>View</div>
                    {addButton}
                </div>


            </div>
        </div>
    )
}
