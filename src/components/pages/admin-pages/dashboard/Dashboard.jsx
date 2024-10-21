import { CiHome } from "react-icons/ci"
import { TfiAngleRight } from "react-icons/tfi"

function Dashboard(){

    return (
        <>
            <div className="page-header mb-6 ">
            <h2 className="text-gray-700 text-2xl mb-2">Dashboard</h2>
            <div className="path flex items-center text-sm border-b border-gray-300 pb-3 text-gray-500">
                <span ><CiHome /></span> <TfiAngleRight />
                <span >Admin</span><TfiAngleRight />
                <span >Dashboard</span>
            </div>
        </div>
        </>
    )
}

export default Dashboard