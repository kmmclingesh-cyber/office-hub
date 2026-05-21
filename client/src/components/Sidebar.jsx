import { NavLink } from "react-router-dom";

function Sidebar() {

const menuItems=[

{
name:"Dashboard",
icon:"🏠",
path:"/"
},

{
name:"Employees",
icon:"👥",
path:"/employees"
},

{
name:"Leave",
icon:"🌴",
path:"/leave"
},

{
name:"Calendar",
icon:"📅",
path:"/calendar"
},

{
name:"Time Tracking",
icon:"⏱",
path:"/time-tracking"
},

{
name:"Tasks",
icon:"💼",
path:"/tasks"
},

{
name:"Attendance",
icon:"📅",
path:"/attendance"
},

{
name:"Reports",
icon:"📊",
path:"/reports"
},

{
name:"Settings",
icon:"⚙️",
path:"/settings"
}

];

return (

<div className="w-64 h-screen bg-gray-950 text-white fixed left-0 top-0 p-6">

<h1 className="text-3xl font-bold mb-12">

Office.HuB

</h1>

<div className="space-y-3">

{
menuItems.map((item)=>(

<NavLink
key={item.name}
to={item.path}

className={({isActive})=>

`flex items-center gap-4 p-4 rounded-xl transition-all duration-300

${isActive
? "bg-blue-600"
: "hover:bg-gray-800"
}`

}

>

<span>
{item.icon}
</span>

<span>
{item.name}
</span>

</NavLink>

))
}

</div>

</div>

)

}

export default Sidebar;