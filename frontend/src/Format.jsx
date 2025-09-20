import NavBar from "./NavBAr"
import {Link}from "react-router-dom"
import { MailPlus } from 'lucide-react';
import { RectangleEllipsis } from 'lucide-react';
import { UserRound } from 'lucide-react';

const Format = () => {
    return (
        <div className=" flex flex-col items-center  gap-5 ">
            <NavBar className="margin-top"/>
             <form className="flex flex-col gap-5 items-center mt-10 bg-white rounded-xl w-1/5 py-7 border-1 border-gray-300">
     <h1 className="font-bold items-center ">Sign In</h1>
            <p className="text-gray-600">Access your account</p>
    
                <div className="w-[95%]">
                    <p className="text-sm text-gray-600 font-semibold">Email Address</p>
                    <div className="relative">
                    <input type="text" className="border-1 border-gray-300 w-full rounded-xl px-15 py-2" placeholder="sample@gmail.com" ></input>
                     <MailPlus className="absolute left-3 top-4" />
                </div>
                </div>
                <div className="w-[95%]">
                    <p>Password</p>
                    <div className="relative">
                    <input type="text" className="border-1 border-gray-300  w-full rounded-xl px-15  py-2 " placeholder="sample123"></input>
                      <RectangleEllipsis className="absolute left-3 top-4"/>
                    </div>
                </div>
                <div className="flex gap-3 justify-around">
                    <input type="checkbox" />
                    <div className="flex gap-15">
                        <p className="text-gray-600 font-semibold">Remember me</p>
                        <p className="text-blue-500 font-semibold">Forgot Password?</p>
                    </div>

                </div>
                <div className="relative flex gap-3 justify-center">
                    <button className="bg-blue-600 border-1 px-30 py-2 rounded-md items-center"> Sign In</button>
                    <UserRound className="absolute left-3 top-4"/>
                    </div>
                    <div className="border-[1px] border-gray-300 w-[90%] mt-3"></div>
                    <div className="flex">
                         <p>Don't have an account? <Link to="/" className="text-blue-500 hover:underline cursor-pointer">create on here</Link> </p>
                         
            
                    </div>
            </form>

        </div>
    )
}
export default Format