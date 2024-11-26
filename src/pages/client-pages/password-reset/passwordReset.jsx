export default function PasswordReset() {

    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function handlePasswordResetRequest(e) {
       

    }

    return (
        <div className="py-20">
            <div className="loading-box max-w-[350px] flex flex-col">
                <h2 className="text-5xl mb-4 text-gray-400  text-center">Verification Expired</h2>

                <p className="text-gray-500 mb-4">Request a new verification link</p>
                <form action="" onSubmit={(e) => { handlePasswordResetRequest(e) }}>
                    <div className="input-group flex items-center border-b border-gray-300 bg-gray-200 py-2 px-3 focus-within:bg-gray-50">
                        <div className="icon text-3xl text-gray-500">
                            <CiMail />
                        </div>
                        <div className="input w-full flex flex-col px-2">
                            <label htmlFor="" className="text-xs text-gray-400 text-left">Email Address</label>
                            <input type="email" name="email" placeholder="yourmail@example.com" className="w-full text-sm outline-none bg-transparent" required defaultValue={email} onChange={
                                (e) => {
                                    setEmail(e.target.value)
                                }
                            } />
                        </div>
                        <div className="verified">

                        </div>

                    </div>


                    <div className="buttons flex justify-end mt-3 mb-5">
                        <button type="submit" className="bg-sky-600 font-medium text-white px-5 py-2 rounded-full shadow-md  text-sm hover:bg-sky-700" >
                            {
                                isLoading ?
                                    (<div className="border-2 border-t-white w-[20px] h-[20px] rounded-full animate-spin"></div>)
                                    :
                                    (<span>Request a new verification link</span>)
                            }

                        </button>
                    </div>


                    <div className="back-link flex justify-end  mt-5 mb-5">
                        <Link to="/" className="text-gray-400 flex items-center font-semibold hover:text-sky-600">
                            <CiHome className="text-xl mr-1" />  Back to Home
                        </Link>
                    </div>

                </form>
            </div>

        </div>
    )
}
