import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useNotification }
from "../context/NotificationContext";

function Navbar(){

const [showNotifications,setShowNotifications]=
useState(false);

const [showProfile,setShowProfile]=
useState(false);

const navigate=
useNavigate();

const {
notifications
}
=
useNotification();

const user=
JSON.parse(

sessionStorage.getItem(
"user"
)

)

||

{

email:"Admin",
role:"Admin"

};


const initial=

user.email
?.charAt(0)
.toUpperCase();


const location=
useLocation();


const pageNames={

"/":"Dashboard",
"/employees":"Employees",
"/tasks":"Tasks",
"/attendance":"Attendance",
"/reports":"Reports",
"/time-tracking":"Time Tracking",
"/leave":"Leave",
"/calendar":"Calendar",
"/settings":"Settings"

};


const currentPage=

pageNames[
location.pathname
]

||

"Office.HuB";



function handleLogout(){

sessionStorage.removeItem(
"user"
);

navigate(
"/login"
);

}



return(

<div
className="
flex
justify-between
items-center
mb-8
"
>


{/* Left */}

<div>

<h1
className="
text-[42px]
font-bold
text-gray-800
"
>

{currentPage}

</h1>

<p
className="
text-gray-500
mt-1
"
>

Welcome back 👋

</p>

</div>



{/* Right */}

<div
className="
flex
items-center
gap-6
relative
"
>


{/* Search */}

<div
className="
relative
"
>

<input

type="text"
placeholder="Search..."

className="
w-[320px]
pl-5
pr-12
py-3
bg-white
border
rounded-2xl
outline-none
shadow-sm
"

 />

<div
className="
absolute
right-4
top-3.5
text-gray-400
"
>

🔍

</div>

</div>



{/* Notification */}

<div

onClick={()=>{

setShowNotifications(
!showNotifications
)

}}

className="
cursor-pointer
relative
text-2xl
"
>

🔔


<span

className="
absolute
-top-2
-right-2
bg-red-500
text-white
w-5
h-5
rounded-full
text-[10px]
flex
justify-center
items-center
"

>

{notifications.length}

</span>

</div>




{/* Notification Popup */}

{

showNotifications && (

<div
className="
absolute
top-16
right-20
bg-white
w-[280px]
rounded-2xl
shadow-xl
p-5
z-50
"
>

<h2
className="
font-semibold
mb-4
"
>

Notifications

</h2>

{

notifications.length>0

?

notifications.map(

(note)=>(

<div

key={note.id}

className="
border-b
py-3
"
>

<p>

{note.message}

</p>

<p
className="
text-xs
text-gray-500
"
>

{note.time}

</p>

</div>

)

)

:

(

<p
className="
text-gray-400
"
>

No notifications 🔔

</p>

)

}

</div>

)

}



{/* Profile */}

<div

onClick={()=>{

setShowProfile(
!showProfile
)

}}

className="
w-12
h-12
rounded-full
bg-blue-500
text-white
flex
justify-center
items-center
font-bold
cursor-pointer
shadow-md
"

>

{initial}

</div>



{/* Profile Popup */}

{

showProfile && (

<div
className="
absolute
top-16
right-0
bg-white
rounded-3xl
shadow-xl
w-[300px]
overflow-hidden
z-50
"
>


<div
className="
p-5
flex
gap-4
items-center
border-b
"
>

<div
className="
w-14
h-14
rounded-full
bg-blue-500
text-white
font-bold
flex
justify-center
items-center
"
>

{initial}

</div>


<div>

<h2
className="
font-bold
"
>

{user.email}

</h2>

<p
className="
text-gray-500
text-sm
"
>

{user.role}

</p>

</div>

</div>



<div
className="
p-3
space-y-1
"
>

<button
className="
w-full
text-left
p-3
rounded-xl
hover:bg-gray-100
"
>

👤 Profile

</button>


<button
className="
w-full
text-left
p-3
rounded-xl
hover:bg-gray-100
"
>

⚙️ Settings

</button>


<button

onClick={handleLogout}

className="
w-full
text-left
p-3
rounded-xl
text-red-500
hover:bg-red-50
"

>

🚪 Logout

</button>

</div>

</div>

)

}

</div>

</div>

);

}

export default Navbar;