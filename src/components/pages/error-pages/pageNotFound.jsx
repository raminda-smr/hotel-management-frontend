import { Link } from "react-router-dom";

function PageNotFound() {

    return (
        <>
            <div className="w-full h-screen bg-yellow-100 flex flex-row justify-center items-center">
                <div className="image">
                    <img src="https://png.pngtree.com/png-vector/20221124/ourmid/pngtree-traffic-cone-in-3d-flat-style-with-orange-white-color-png-image_6471441.png" alt="" className="mb-[-50px]" />
                </div>
                <div className="content flex flex-col">
                    <h1 className="text-[200px] text-gray-600 leading-none">404</h1>
                    <h3 className="text-5xl text-gray-600">Page Not Found</h3>
                    <Link className="bg-blue-600 text-white text-center text-xl py-4 rounded-full mt-5 hover:bg-blue-500 " to="/" >Go To Home</Link>
                </div>
            </div>
        </>
    )
}

export default PageNotFound