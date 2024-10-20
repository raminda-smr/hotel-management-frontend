import Header from "../../header/Header";

export function HomePage() {

    return (
        <>
            <Header />
            <div className='w-full h-screen bg-blue-900 flex flex-col items-center'>

                <div className='border border-white bg-white w-[700px] h-[100px] flex rounded-lg justify-center items-center'>

                    <input type="date" name='start-date' />

                    <input type="date" name='end-date' />

                    <select name="room-category" id="">
                        <option value="Standard">Standard</option>
                        <option value="Luxuary">Luxuary</option>
                        <option value="Supreme">Supreme</option>
                    </select>

                    <button>Book Now</button>
                </div>

                <h1 className='text-white text-5xl'>Welcome to the Lionine Villa</h1>

            </div>
        </>
    )
}