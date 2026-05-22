import { NavLink } from "react-router-dom";

function Sidebar() {

const user = JSON.parse(

sessionStorage.getItem(
"user"
)

) || {

email:"Guest",
role:"User"

};


const menuItems=[

{
name:"Dashboard",
path:"/",
icon:"🏠",
roles:["Admin","User"]
},

{
name:"Employees",
path:"/employees",
icon:"👨‍💼",
roles:["Admin"]
},

{
name:"Tasks",
path:"/tasks",
icon:"✅",
roles:["Admin","User"]
},

{
name:"Attendance",
path:"/attendance",
icon:"📅",
roles:["Admin","User"]
},

{
name:"Reports",
path:"/reports",
icon:"📊",
roles:["Admin"]
},

{
name:"Calendar",
path:"/calendar",
icon:"🗓️",
roles:["Admin","User"]
},

{
name:"Time Tracking",
path:"/time-tracking",
icon:"⏰",
roles:["Admin","User"]
},

{
name:"Leave",
path:"/leave",
icon:"🌴",
roles:["Admin","User"]
},

{
name:"Settings",
path:"/settings",
icon:"⚙️",
roles:["Admin"]
}

];


const visibleMenu=

menuItems.filter(

item=>

item.roles.includes(
user.role
)

);


return(

<div
className="
h-screen
w-[240px]
bg-white
border-r
border-gray-200
fixed
left-0
top-0
flex
flex-col
justify-between
px-5
py-7
shadow-sm
"
>

<div>

{/* Logo */}

<div className="mb-10">

<h1
className="
text-3xl
font-bold
text-gray-800
"
>

Office.HuB 🚀

</h1>

</div>



{/* Menu */}

<div className="space-y-2">

{

visibleMenu.map(item=>(

<NavLink

key={item.path}

to={item.path}

className={({isActive})=>

`

flex
items-center
gap-4
px-4
py-4
rounded-2xl
transition-all
duration-300

${

isActive

?

"bg-blue-50 text-blue-600 font-semibold shadow-sm"

:

"text-gray-600 hover:bg-gray-100 hover:text-black"

}

`

}

>

<span
className="
text-xl
"
>

{item.icon}

</span>

<span
className="
text-[15px]
"
>

{item.name}

</span>

</NavLink>

))

}

</div>

</div>


{/* Footer */}

<div
className="
text-center
text-sm
text-gray-400
"
>

Office.HuB v1.0

</div>

</div>

);

}

export default Sidebar;