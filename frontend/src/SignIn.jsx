const SignIn= () => {
    return(
<div className="flex justify-around h-3 items-center border-2 border-white bg-white p-7">
    <h1 className="text-xl font-bold ">BlogVerse</h1>
    <button className=" hover:bg-gray-300 px-4 py-2 cursor-pointer">home</button>
    <div className="flex gap-3 ">
        <button className="cursor-pointer">Sign In</button>
        <button className="border-2 bg-blue-700 text-white rounded-xl  px-2 py-1 cursor-pointer">Sign Up</button>
    </div>

</div>
    )
}
export default SignIn