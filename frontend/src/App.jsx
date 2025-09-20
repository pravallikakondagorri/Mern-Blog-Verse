//import NavBar from "./NavBAr"
//import SignUp from "./SignUp"
import SignIn from"./SignIn"
import Format from"./Format"
import Home from"./Home"
import { Routes,Route } from "react-router-dom"
import SignUp from "./SignUp"
function App() {
  
  return (
  <Routes>
<Route path="/SignUp"element={<SignUp/>}/>
<Route path="/" element={<Format/>}/>
<Route path="/Home" element={<Home/>}/>



  </Routes>
     
       
  )
}

export default App
