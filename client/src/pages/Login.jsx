import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

const navigate =
useNavigate();

const [loading,setLoading] =
useState(false);

const [showPassword,setShowPassword] =
useState(false);

const [formData,setFormData] =
useState({

email:"",
password:"",
role:"Admin"

});


function handleChange(e){

setFormData({

...formData,

[e.target.name]:
e.target.value

});

}


async function login(){

if(

!formData.email.trim() ||
!formData.password.trim()

){

alert(
"Please fill all fields"
);

return;

}

try{

setLoading(true);


// Fake delay for better UX

await new Promise(

resolve=>

setTimeout(
resolve,
1000
)

);


sessionStorage.setItem(

"user",

JSON.stringify({

email:
formData.email,

role:
formData.role

})

);


navigate("/");

}
catch(error){

console.log(error);

alert(
"Login failed ❌"
);

}
finally{

setLoading(false);

}

}



return(

<div
className="
min-h-screen
flex
justify-center
items-center
bg-gray-100
px-4
"
>

<div
className="
bg-white
w-[450px]
rounded-3xl
shadow-2xl
p-10
"
>

<div className="text-center mb-8">

<h1
className="
text-4xl
font-bold
"
>

Office.HuB 🚀

</h1>

<p
className="
text-gray-500
mt-2
"
>

Office Management System

</p>

</div>



<div className="space-y-5">

<input

name="email"

placeholder="Email"

value={formData.email}

onChange={handleChange}

className="
w-full
border
p-4
rounded-xl
outline-none
focus:ring-2
focus:ring-blue-500
"

/>


<div className="relative">

<input

type={
showPassword
?
"text"
:
"password"
}

name="password"

placeholder="Password"

value={formData.password}

onChange={handleChange}

className="
w-full
border
p-4
rounded-xl
outline-none
focus:ring-2
focus:ring-blue-500
"

/>


<button

type="button"

onClick={()=>

setShowPassword(

!showPassword

)

}

className="
absolute
right-4
top-4
"

>

{

showPassword

?

"🙈"

:

"👁️"

}

</button>

</div>



<select

name="role"

value={formData.role}

onChange={handleChange}

className="
w-full
border
p-4
rounded-xl
"

>

<option>

Admin

</option>

<option>

User

</option>

</select>



<button

onClick={login}

disabled={loading}

className="
w-full
bg-blue-600
text-white
p-4
rounded-xl
hover:bg-blue-700
disabled:bg-gray-400
"

>

{

loading

?

"Signing In..."

:

"Login"

}

</button>

</div>

</div>

</div>

);

}

export default Login;