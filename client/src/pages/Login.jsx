import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){

const navigate=useNavigate();

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

function handleLogin(){

if(
email==="admin@huboffice.in"
&&
password==="admin123"
){

localStorage.setItem(

"user",

JSON.stringify({

name:"Admin",
role:"admin"

})

);

navigate("/");

}
else{

alert("Invalid Credentials");

}

}

return(

<div className="min-h-screen flex justify-center items-center bg-gray-100">

<div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">

<h1 className="text-3xl font-bold mb-2">

Office.HuB

</h1>

<p className="text-gray-500 mb-6">

Sign in to continue

</p>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full border p-3 rounded-xl mb-4"
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full border p-3 rounded-xl mb-6"
/>

<button
onClick={handleLogin}
className="w-full bg-blue-600 text-white p-3 rounded-xl"
>

Login

</button>

</div>

</div>

)

}

export default Login;