
export default function UserDropdownButton() {
    return (
        <div className="user-data flex items-center bg-slate-900 -lg px-3 py-2 mr-4 select-none cursor-pointer">
            <div className="user-image">
                <img className="w-[30px] h-[30px]" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
            </div>
            <div className="user-name ml-2 text-white flex flex-col">
                <span>Raminda Laksiri</span>
                <span className="text-xs">ramindalaksiri91@gmail.com</span>
            </div>
        </div>
    )
}
