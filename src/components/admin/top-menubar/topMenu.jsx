function TopMenu(){

return(
    <div className="top-menu w-full bg-gray-800 flex justify-between items-center">
        <div className="div">
            <h4 className="text-white pl-4">Welcome to Lionine Villa Backend!</h4>
        </div>

        <div className="user-data flex items-center bg-slate-900 -lg px-3 py-2">
            <div className="user-image">
                 <img className="w-[30px] h-[30px]" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
            </div>
            <div className="user-name ml-2">Raminda</div>
        </div>
    </div>
)

}

export default TopMenu