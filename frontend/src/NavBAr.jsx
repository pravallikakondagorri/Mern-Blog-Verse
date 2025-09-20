import React from   "react"
import {Link} from"react-router-dom"
const NavBar = () => {
    return (
        <div className="flex justify-around h-16 w-full items-center border-2">
<h1 className=" text-xl font-bold">BlogVerse</h1>
<Link to="/Home"  className="hover: bg-blue-200 px-4 py-3 rounded-2xl cursor-pointer">Home</Link>
        
        <div className="flex gap-5">
<Link to="/" className="font-semibold text-gray-500 py-2">Sign in</Link>
<Link to="/SignUp" className="bg-blue-600 rounded-2xl w-[50] p-2 text-gray-900">Sign up</Link>
        </div>
        </div>
    )
}
export default NavBar