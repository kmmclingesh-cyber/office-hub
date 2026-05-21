import { useState } from "react";

function Attendance() {

const [attendance] = useState([

{
id:"EMP001",
name:"Lingesh",
date:"2025-09-10",
status:"Present"
},

{
id:"EMP002",
name:"John",
date:"2025-09-10",
status:"Leave"
},

{
id:"EMP003",
name:"David",
date:"2025-09-10",
status:"Absent"
}

]);

function getBadge(status){

if(status==="Present")
return "bg-green-100 text-green-700";

if(status==="Leave")
return "bg-yellow-100 text-yellow-700";

return "bg-red-100 text-red-700";

}

return (

<div>

<h1 className="text-3xl font-bold">

Attendance 📅

</h1>

<p className="text-gray-500 mb-8">

Track employee attendance

</p>

<div className="bg-white rounded-xl shadow-lg p-5">

<table className="w-full">

<thead>

<tr className="border-b h-12">

<th>ID</th>
<th>Name</th>
<th>Date</th>
<th>Status</th>

</tr>

</thead>

<tbody>

{
attendance.map((emp)=>(

<tr
key={emp.id}
className="border-b h-14 text-center"
>

<td>{emp.id}</td>

<td>{emp.name}</td>

<td>{emp.date}</td>

<td>

<span
className={`px-3 py-2 rounded-full ${getBadge(emp.status)}`}
>

{emp.status}

</span>

</td>

</tr>

))
}

</tbody>

</table>

</div>

</div>

)

}

export default Attendance;