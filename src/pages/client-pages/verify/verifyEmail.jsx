export default function VerifyEmail() {


    return (
        <div className="p-20 flex justify-center">
            <div className="loading-box max-w-[350px] flex flex-col text-center">
                <h2 className="text-5xl mb-4 text-gray-400">Please Wait</h2>
                <img src="/images/animated/infinite-spinner.svg" alt="" className="w-32 mx-auto" />
                <h4 className="text-gray-500 mt-4">Verifing your email...</h4>
            </div>
        </div>
    )
}
