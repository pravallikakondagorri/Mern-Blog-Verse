const Productcard=()=>
{
return(
    <div className="border-4 border-black w-[400px] flex flex-col items-center gap-10 py-4 rounded-2xl bg-pink-100 ">
        <img src="vite.svg" alt="img" className="w-[150px] h-[150px] border-3 border-black rounded-full  bg-blue-300" />
        <div className="felx-col gap-5 items-center">
        <h2 className="font-bold text-3xl text-blue-600">product 1</h2>
        <p className="text-2xl text-gray-800 text-center">This is the 1st product</p>
        <p className=" font-bold text-3xl text-green-400  ">5000</p>
        </div>
        <button className="text-black-400 bg-blue-500 w-[90%] py-3 rounded-2xl cursor-pointer hover:bg-black-900 ">
            Add to card
        </button>
    </div>
)
}
export default Productcard