import { useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar(){

const [showNotifications,setShowNotifications]=
useState(false);

const notifications=[

"New employee added",
"Task assigned to Lingesh",
"Attendance updated",
"Leave request pending"

];

const location=useLocation();

const pageNames={

"/":"Dashboard",
"/employees":"Employees",
"/tasks":"Tasks",
"/attendance":"Attendance",
"/reports":"Reports",
"/time-tracking":"Time Tracking",
"/leave":"Leave"

};

const currentPage=

pageNames[location.pathname]
||"Office.HuB";

return(

<div className="flex justify-between items-center">

<div>

<h1 className="text-4xl font-bold">

{currentPage}

</h1>

<p className="text-gray-500">

Welcome back, Admin 👋

</p>

</div>


<div className="flex items-center gap-5 relative">

<input
type="text"
placeholder="Search..."
className="px-5 py-3 rounded-xl border outline-none"
/>

<div
onClick={()=>

setShowNotifications(
!showNotifications
)

}

className="cursor-pointer relative text-2xl"
>

🔔

<span
className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs px-2"
>

{notifications.length}

</span>

</div>


<div className="w-12 h-12 rounded-full bg-gray-950 text-white flex justify-center items-center">

L

</div>


{

showNotifications && (

<div className="absolute top-16 right-0 bg-white rounded-xl shadow-lg w-[300px] p-4 z-50">

<h2 className="font-bold mb-4">

Notifications

</h2>

<div className="space-y-3">

{

notifications.map((note,index)=>(

<div
key={index}
className="border-b pb-2"
>

{note}

</div>

))

}

</div>

</div>

)

}

</div>

</div>

)

}

export default Navbar;