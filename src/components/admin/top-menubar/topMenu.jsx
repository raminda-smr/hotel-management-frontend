import UserDropdown from "./userDropdown"

function TopMenu(){

return(
    <div className="top-menu w-full bg-gray-800 flex justify-between items-center">
        <div className="div">
            <h4 className="text-white pl-4">Welcome to Lionine Villa Backend!</h4>
        </div>

        <UserDropdown />
        
    </div>
)

}

export default TopMenu