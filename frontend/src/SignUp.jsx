import NavBar from "./NavBAr"
import { Link } from "react-router-dom"
import { CircleUser } from 'lucide-react';
import { LockKeyhole } from 'lucide-react';
import { MailPlus } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from "react";

const SignUp = () => {
    const [formdata, setformdata] = useState(
        {
            fullname: "",
            email: "",
            password: "",
            confirmpassword: ""
        }
    )
    const [password, setpassword] = useState(false);
    const [confirmpassword, setconfirmpassword] = useState(false);
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const handleSubmit = (event) => {
         event.preventDefault()
        let newErrors={}
       if(!formdata.fullname)
       {
        newErrors.fullname="please enter your name"
       }
       if(!formdata.email)
       {
        newErrors.email="please enter your email"
       }
       if(!formdata.password)
       {
        newErrors.password="please enter your password"
       }
       if(!formdata.confirmpassword)
       {
        newErrors.confirmpassword="please enter confirm password"
       }
       else if(formdata.password!==formdata.confirmpassword)
       {
        newErrors.confirmpassword="your confirm password is not matched"
       }
       if (Object.keys(newErrors).length>0)
       {
        setErrors(newErrors)
       }
       else{
        setSuccess("your created an account")
         setformdata(
               {
              fullname: "",
                   email: "",
                   password: "",
                   confirmpassword: ""
                }
            )
       }
        // if (!formdata.fullname || !formdata.email || !formdata.password || !formdata.confirmpassword) {
        //     setError("please fill all the fields")
        // }
        // else if (formdata.password !== formdata.confirmpassword) {
        //     setError("password not matched")
        // }
        // else {
        //     setError("")
        //     setSuccess("your created an account")
        //     setformdata(
        //         {
        //             fullname: "",
        //             email: "",
        //             password: "",
        //             confirmpassword: ""
        //         }
        //     )
        // }
    }
    const [errors, setErrors] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmpassword: ""
    })
    const handlePassword = () => {
        setpassword((password) => !password)
    }
    const handleconfirmpassword = () => {

        setconfirmpassword((confirmpassword) => !confirmpassword)
    }
    const handleChange = (event) => {
        setError("")
        setSuccess("")
        setformdata((formdata) => (
            {
                ...formdata,
                [event.target.name]: event.target.value
            }
        )
    )
         setErrors((errors) => (
            {
                ...errors,
                [event.target.name]:""
            }
        )
        )

    }
    return (
        <div className="flex items-center flex-col gap-5">
            <NavBar />
            <h1 className="text-2xl font-bold text-blue-600"> Join BlogVerse</h1>
            <p className="text-xl text-gray-600 text-center font-semibold"> create your account  and<br></br> start your Blogging journey today</p>
            <form onSubmit={handleSubmit} className="flex flex-col border-1 border-black w-1/3 py-7 items-center gap-5 rounded-xl">
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Full Name</p>
                    <div >
                        <input value={formdata.fullname} onChange={handleChange} name="fullname" type="text" placeholder="enter your full name" className="border-1 border-gray-700 w-full py-2 px-3 rounded-2xl focus:outline-none focus:border-purple-300"></input>
                    </div>
                    {errors.fullname &&<p className="text-red-500">{errors.fullname}</p>}
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Email</p>
                    <div className="relative">
                        <input value={formdata.email} onChange={handleChange} name="email" type="email" placeholder="enter your email" className="border-1 border-gray-700 w-full py-2 pl-12 px-3 rounded-2xl focus:outline-none focus:border-purple-300"></input>
                        <MailPlus className="absolute left-3 text-blue-400 top-3" />
                    </div>
                    {errors.email&&<p className="text-red-500">{errors.email}</p>}
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">password</p>
                    <div className="relative flex justify-center">
                        <input value={formdata.password} onChange={handleChange} name="password" type={password ? "text" : "password"} placeholder="enter your password" className="border-1 border-gray-700 w-full py-2 px-3 pl-12 rounded-2xl focus:outline-none focus:border-purple-300" />
                        <LockKeyhole className="absolute left-3 top-3 text-blue-400" />
                        <p onClick={handlePassword}>{password ? <Eye className="absolute right-4 top-3 text-blue-400" /> : <EyeOff className="absolute right-4 top-3 text-blue-400" />}</p>
                    </div>
                    {errors.password&&<p className="text-red-500">{errors.password}</p>}
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">confirm Password</p>
                    <div className="relative flex justify-center">
                        <input value={formdata.confirmpassword} onChange={handleChange} name="confirmpassword" type={confirmpassword ? "text" : "password"} placeholder="confirm your password" className="border-1 border-gray-700 w-full py-2 pl-12 px-3 rounded-2xl focus:outline-none focus:border-purple-300" />
                        <LockKeyhole className="absolute left-3 top-3 bottom-2 text-blue-400" />
                        <p onClick={handleconfirmpassword}>{confirmpassword ? <Eye className="absolute right-4 top-3 text-blue-400" /> : <EyeOff className="absolute right-4 top-3 text-blue-400" />}</p>
                    </div>
                    {errors.confirmpassword&&<p className="text-red-500">{errors.confirmpassword}</p>}
                </div>
                <div className="flex gap-2 border-1 border-gray-500 w-[90%] py-3 px-4 rounded-2xl items-center justify-center">
                    <input type="checkbox" name="" id="" className="h-5 w-5" />
                    <p> I agree to the terms of service and privacy policy</p>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
                <button type="submit" className="w-[90%] flex justify-center gap-3 bg-purple-600 text-white py-4 font-semibold rounded-xl">  <CircleUser /> <p>create account</p></button>
                <div className="border-[0.5px] border-gray-500 w-[90%] mt-4"></div>
                <p className="text-gray-500 font-semibold">Already have an account?<Link to="/" className="text-purple-500">Sign in here</Link></p>
                <button className="text-gray-500 font-semibold items-center hover:bg-gray-400 py-4 w-[90%] rounder-xl cursor-pointer">Back to home</button>


            </form>
        </div>
    )
}
export default SignUp