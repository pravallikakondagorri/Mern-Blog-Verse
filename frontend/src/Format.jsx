const Format = () => {
    return (
        <div className=" flex flex-col items-center mt-40 gap-5">
             <form className="flex flex-col gap-5 items-center  bg-white rounded-xl w-1/5 py-7 border-1 border-gray-300">
     <h1 className="font-bold ">Sign In</h1>
            <p>Access your account</p>
    
                <div className="">
                    <p>Email Address</p>
                    <input type="text" className="border-1 border-gray-300 w-full rounded-xl px-15 py-2" placeholder="sample@gmail.com" ></input>
                </div>
                <div>
                    <p>Password</p>
                    <input type="text" className="border-1 border-gray-300  w-full rounded-xl px-15  py-2 " placeholder="sample123"></input>
                </div>
                <div className="flex gap-3 justify-around">
                    <input type="checkbox" name=" " id="" className="h-5 w-5" />
                    <div className="flex gap-15">
                        <p>Remember me</p>
                        <p className="text-blue-500">Forgot Password?</p>
                    </div>

                </div>
                <div>
                    <button className="bg-blue-600 border-1 px-30 py-2 rounded-xl items-center"> Sign In</button>
                    </div>
                    <div className="border-[1px] border-gray-300 w-[90%] mt-3"></div>
                        <p>Don't have an account? <span className="text-blue-500">create one here</span></p>
                    
            </form>

        </div>
    )
}
export default Format