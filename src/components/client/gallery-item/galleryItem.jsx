import { CiZoomIn } from "react-icons/ci";

export default function GalleryItem(props) {
    return (
        <div className="gallery-item rounded-lg overflow-hidden relative ">
            <img src={props.item.image} alt={props.item.name} className="w-full" />
            <div className="hover-buttons absolute top-0 left-0 bg-black/40 w-full h-full flex flex-col items-center justify-center  text-white text-5xl transition-all cursor-pointer scale-90 opacity-0 hover:opacity-100 hover:scale-100">
                <CiZoomIn />
                <span className=" text-base">{props.item.name}</span>
            </div>
        </div>
    )
}
