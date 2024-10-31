import { IoIosClose } from 'react-icons/io'

export default function Modal() {
    return (
        <div className='modal-backdrop w-full h-screen bg-black/30 top-0 left-0 fixed flex justify-center items-center' >
            <div className="modal bg-white max-w-[512px] rounded-md overflow-hidden">
                <div className="modal-head flex justify-between items-center ">
                    <div className="title w-full text-center bg-white pt-3">
                        <h4 className='font-medium text-lg '>Modal title</h4>
                    </div>
                    <div className="close-button flex h-full px-2 bg-gray-400">
                        <IoIosClose />
                    </div>

                </div>
                <div className="modal-body px-3 py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui dolore itaque tenetur placeat voluptatem, quidem quod distinctio perferendis, magnam dolores fuga aut, possimus atque unde? Perspiciatis, omnis? Molestias, dolorem.
                </div>
                <div className="modal-footer bg-gray-200 text-gray-500 text-sm p-3">
                    <p className="footer-content">click outside to exit!</p>
                </div>
            </div>
        </div>
    )
}
