import { Link } from "react-router-dom";

export function PageNotFound(){

    return (
        <>
            <div className="w-full h-screen bg-yellow-100 flex flex-col justify-center items-center">
                <h1 className="text-[200px] text-gray-600 leading-none">404</h1>
                <h3 className="text-5xl text-gray-600">Page Not Found</h3>
                <Link className="px-7 py-3 bg-blue-600 text-white rounded-full mt-5 hover:bg-blue-500" to="/" >Go To Home</Link>
            </div>
        </>
    )
}