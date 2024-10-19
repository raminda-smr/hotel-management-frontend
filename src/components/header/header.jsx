import UserTag from '../userData/userdata'

function Header(){
    return(
        <header className='w-full bg-blue-500 flex height-[100px] relative items-center p-2'>
            <h1 className='text-white text-[30px] '>Lionine Villa</h1>
            <UserTag />
        </header>
    )
}

export default Header