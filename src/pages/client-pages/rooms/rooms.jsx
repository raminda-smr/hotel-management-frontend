import {Link} from 'react-router-dom'

export default function Rooms() {

    return (
        <div className='w-full h-screen bg-blue-900'>
            <h1 className="text-white text-5xl text-center pt-10 pb-5">Room Categories</h1>

            <div class="container w-[1200px] mx-auto">

                <div class="room-categories grid grid-cols-3 gap-4">

                    <div className="room-category bg-white rounded-lg overflow-hidden flex flex-col">
                        <img src="https://amorgoshotel.com/wp-content/uploads/2014/12/Amorgos-Standard-Room1-e1464286427430.jpg" alt="" className="w-full" />
                        <h2 className="pt-3 pb-2 text-center text-3xl" >Standard</h2>
                        <p className="px-4 pb-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, porro assumenda? Harum suscipit quibusdam, voluptatum explicabo ea repudiandae soluta minima fuga.</p>
                        
                        <Link className='text-white bg-blue-600 px-5 py-2 rounded-full inline-block mx-auto mb-4 hover:bg-blue-500' to="/">Book Now</Link>

                    </div>

                    <div className="room-category bg-white rounded-lg overflow-hidden flex flex-col ">
                        <img src="https://amorgoshotel.com/wp-content/uploads/2014/12/Amorgos-Superior-Room1-e1464286461356.jpg" alt="" className="w-full" />
                        <h2 className="pt-3 pb-2 text-center text-3xl" >Luxury</h2>
                        <p className="px-4 pb-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, porro assumenda? Harum suscipit quibusdam, voluptatum explicabo ea repudiandae soluta minima fuga.</p>
                        
                        <Link className='text-white bg-blue-600 px-5 py-2 rounded-full inline-block mx-auto mb-4 hover:bg-blue-500' to="/">Book Now</Link>
                    </div>

                    <div className="room-category bg-white rounded-lg overflow-hidden flex flex-col">
                        <img src="https://amorgoshotel.com/wp-content/uploads/2014/12/Amorgos-Grand-Superior3-e1464286239555.jpg" alt="" className="w-full" />
                        <h2 className="pt-3 pb-2 text-center text-3xl" >Supreme</h2>
                        <p className="px-4 pb-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, porro assumenda? Harum suscipit quibusdam, voluptatum explicabo ea repudiandae soluta minima fuga.</p>

                        <Link className='text-white bg-blue-600 px-5 py-2 rounded-full inline-block mx-auto mb-4 hover:bg-blue-500' to="/">Book Now</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}