import { useState } from "react"
import { CiZoomIn } from "react-icons/ci"
import { AiOutlineClose } from "react-icons/ai"

export default function GalleryItem(props) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    function openModal(){
        setIsModalOpen(true)
    }
    
    function closeModal(){
        setIsModalOpen(false)
    }

    return (
        <div className="gallery-item">
            <div className="image-face rounded-lg overflow-hidden relative" onClick={openModal}>
                <img src={props.item.image} alt={props.item.name} className="w-full" />
                <div className="hover-buttons absolute top-0 left-0 bg-black/50 w-full h-full flex flex-col items-center justify-center text-white text-5xl transition-all cursor-pointer scale-90 opacity-0 hover:opacity-100 hover:scale-100">
                    <CiZoomIn />
                    <span className="text-base">{props.item.name}</span>
                </div>
            </div>

            {isModalOpen && (
                <div className="image-modal fixed w-full h-full top-0 left-0 z-30 flex items-center justify-center bg-black/80" onClick={closeModal}>
                    <div className="back-drop flex relative max-w-3xl w-full m-4" onClick={(e) => e.stopPropagation()}>
                        <button onClick={closeModal} className="absolute -top-3 -right-3 p-2 text-white text-xl bg-red-500 rounded-full hover:bg-red-600 ">
                            <AiOutlineClose />
                        </button>
                        <img src={props.item.image} alt={props.item.name} className="w-full h-auto mx-auto object-contain rounded-sm" />
                        <div className="text-white absolute bottom-0 block bg-black/40 w-full">
                            <div className="description w-full p-4">{props.item.description}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}