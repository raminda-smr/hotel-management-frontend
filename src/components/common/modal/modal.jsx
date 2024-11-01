import { useEffect, useRef } from 'react'
import { IoIosClose } from 'react-icons/io'

export default function Modal(props) {

    function closeModel() {
        props.setIsModalOpen(false)
    }

    function handleBackdropClick(e) {
        if (e.target === e.currentTarget) {
            props.setIsModalOpen(false)
        }
    }

    return (
        <div className='modal-backdrop w-full h-screen bg-black/70 top-0 left-0 fixed flex justify-center items-center z-10' onClick={handleBackdropClick} >
            <div className="modal bg-white  max-w-[512px] rounded-md overflow-hidden" >
                <div className="modal-head flex justify-between items-center bg-gray-200">
                    <div className="title w-full text-center ">
                        <h4 className='font-medium text-lg pt-2 pb-1 px-5'>{props.title}</h4>
                    </div>
                    <div className="close-button flex h-full p-2 py-3 bg-gray-400 text-lg hover:bg-red-900 hover:text-white" onClick={closeModel}>
                        <IoIosClose  />
                    </div>

                </div>
                <div className="modal-body px-5 py-6">
                    {props.children}
                </div>
                {
                    props.footer && (
                        <div className="modal-footer bg-gray-100 text-gray-500 p-3">
                            {props.footer}
                        </div>
                    )
                }

            </div>
        </div>
    )
}
