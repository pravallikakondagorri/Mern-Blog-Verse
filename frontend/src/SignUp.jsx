import NavBar from "./NavBAr"
import { Link } from "react-router-dom"
import { CircleUser } from 'lucide-react';
import { LockKeyhole } from 'lucide-react';
import { MailPlus } from 'lucide-react';


const SignUp = () => {
    return (
        <div className="flex items-center flex-col gap-5">
            <NavBar />
            <h1 className="text-2xl font-bold text-blue-600"> Join BlogVerse</h1>
            <p className="text-xl text-gray-600 text-center font-semibold"> create your account  and<br></br> start your Blogging journey today</p>
            <form className="flex flex-col border-1 border-black w-1/3 py-7 items-center gap-5 rounded-xl">
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Full Name</p>
                    <div className="">
                    <input type="text " placeholder="enter your full name" className="border-1 border-gray-700 w-full py-2 px-3 rounded-2xl focus:outline-none focus:border-purple-300"></input>
                     
                </div>
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Email</p>
                    <div className="relative">
                    <input type="text " placeholder="enter your email" className="border-1 border-gray-700 w-full py-2 pl-12 px-3 rounded-2xl focus:outline-none focus:border-purple-300"></input>
                     <MailPlus className="absolute left-3 top-4"/>
                </div>
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">password</p>
                    <div className="relative flex justify-center">
                    <input type="password " placeholder="enter your password" className="border-1 border-gray-700 w-full py-2 px-3 pl-12 rounded-2xl focus:outline-none focus:border-purple-300"/>
                     <LockKeyhole className="absolute left-3 top-4"/>
                </div>
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">confirm Password</p>
                    <div className="relative flex justify-center"> 
                    <input type="password" placeholder="confirm your password" className="border-1 border-gray-700 w-full py-2 pl-12 px-3 rounded-2xl focus:outline-none focus:border-purple-300"/>
                      <LockKeyhole className="absolute left-3 top-4 bottom-2"/>
                </div>
                  </div>
                <div className="flex gap-2 border-1 border-gray-500 w-[90%] py-3 px-4 rounded-2xl items-center justify-center">
                    <input type="checkbox" name="" id="" className="h-5 w-5" />
                    <p> I agree to the terms of service and privacy policy</p>
                </div>
                <button className="w-[90%] flex justify-center gap-3 bg-purple-600 text-white py-4 font-semibold rounded-xl">  <CircleUser /> <p>create account</p></button>
                <div className="border-[0.5px] border-gray-500 w-[90%] mt-4"></div>
                <p className="text-gray-500 font-semibold">Already have an account?<Link to="/" className="text-purple-500">Sign in here</Link></p>
                <button className="text-gray-500 font-semibold items-center hover:bg-gray-400 py-4 w-[90%] rounder-xl cursor-pointer">Back to home</button>


            </form>
        </div>
    )
}
export default SignUp