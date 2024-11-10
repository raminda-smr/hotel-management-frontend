import UserDropdown from "./userDropdown"

function TopMenu(props){

return(
    <div className="top-menu w-full bg-gray-800 flex justify-between items-center">
        <div className="div">
            <h4 className="text-white pl-4">Welcome to Lionine Villa Backend!</h4>
        </div>

        <UserDropdown user={props.user} setUserLogged={props.setUserLogged} />
        
    </div>
)

}

export default TopMenu