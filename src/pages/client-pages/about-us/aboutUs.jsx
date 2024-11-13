
export default function AboutUs() {

    return (
        <div className='w-full h-screen bg-blue-900'>
            <h1 className="text-white text-5xl text-center pt-10 pb-10">About us</h1>

            <div class="container w-[1200px] mx-auto">

                <div class="grid grid-cols-2 gap-4">
                    <div className="about-image">
                        <img src="https://www.thedivinevilla.com/upload/room/gallery/-360145419_190842995487_1674122999_n.jpg" alt="" className='w-full rounded-lg' />
                    </div>
                    <div className="content">
                        <h2 className='text-white text-3xl mb-5 uppercase'>Lionine Villa</h2>
                        <p className='text-gray-100 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat sint ipsam dolorem perferendis? Modi hic, autem cupiditate natus reprehenderit facilis beatae error accusantium dignissimos, sequi nam illum delectus iusto aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis expedita blanditiis beatae autem facilis quisquam vero, eius quaerat repudiandae, quae reiciendis iure! Provident accusamus autem perspiciatis molestias, eum iusto. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, quis corporis. Inventore commodi, possimus alias a et maxime. Magnam obcaecati fuga nemo consectetur iusto aliquam mollitia iste eaque laboriosam perferendis.</p>
                    </div>

                </div>



                <div class="grid grid-cols-4 gap-4 mt-5">
                    <div>
                        <img src="https://www.thedivinevilla.com/upload/room/gallery/-82877919081_108325221825_1676617647_n.jpg" alt="" className='rounded-lg' />
                    </div>
                    <div>
                        <img src="https://www.thedivinevilla.com/upload/room/gallery/-313142954_190889997952_1674122913_n.jpg" alt=""  className='rounded-lg'/>
                    </div>
                    <div>
                        <img src="https://www.thedivinevilla.com/upload/room/gallery/-359137559_190844003347_1674122912_n.jpg" alt="" className='rounded-lg' />
                    </div>
                    <div>
                        <img src="https://www.thedivinevilla.com/upload/room/gallery/-108099078_191095041828_1674122911_n.jpg" alt="" className='rounded-lg' />
                    </div>
                </div>

            </div>

        </div>
    )
}