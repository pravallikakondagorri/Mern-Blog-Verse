import React from   "react"
const NavBar = () => {
    return (
        <div className="flex justify-around h-16 items-center border-2">
<h1 className=" text-xl font-bold">BlogVerse</h1>
<button className="hover: bg-blue-200 px-4 py-3 rounded-2xl cursor-pointer">Home</button>
        
        <div className="flex gap-5">
<button className="font-semibold text-gray-500 ">Sign in</button>
<button className="bg-blue-600 rounded-2xl w-[50] p-2 text-gray-900">Sign up</button>
        </div>
        </div>
    )
}
export default NavBar