
import UserTag from '../userData/userdata'
import './header.css'

function Header(){
    return(
        <header>
            <h1 className='text-red-500 text-[30px]'>Hotel Management System</h1>
            <UserTag />
        </header>
    )
}

export default Header