export default function PageWrapper(props) {
  return (
    <div className={`w-full min-h-[300px] flex justify-center items-strech py-10 bg-center bg-no-repeat bg-cover bg-[url('/wrappers/about-us.jpg')]`} >
        <div className="content text-white text-5xl text-center  uppercase font-bold flex items-center ">
            <h1 className="drop-shadow-[0_5px_5px_rgba(0,0,0,0.95)]">{props.title}</h1>
        </div>
    </div>
  )
}
