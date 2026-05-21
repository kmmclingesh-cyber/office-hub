import { useState } from "react";

function Leave(){

const [search,setSearch]=useState("");

const [leaveRequests,setLeaveRequests]=useState([

{
id:"LEV001",
employee:"Lingesh",
type:"Sick Leave",
date:"2025-09-15",
status:"Pending"
},

{
id:"LEV002",
employee:"John",
type:"Casual Leave",
date:"2025-09-18",
status:"Approved"
}

]);

function approveLeave(id){

setLeaveRequests(

leaveRequests.map((leave)=>

leave.id===id
? {...leave,status:"Approved"}
: leave

)

);

}

function rejectLeave(id){

setLeaveRequests(

leaveRequests.map((leave)=>

leave.id===id
? {...leave,status:"Rejected"}
: leave

)

);

}

const filteredLeaves=

leaveRequests.filter((leave)=>

leave.employee
.toLowerCase()
.includes(search.toLowerCase())

);

return(

<div>

<div className="flex justify-end mb-8">

<button

className="bg-blue-600 text-white px-5 py-3 rounded-xl"

>

+ Apply Leave

</button>

</div>


<input

type="text"
placeholder="Search employee..."

value={search}

onChange={(e)=>
setSearch(e.target.value)
}

className="w-full p-3 rounded-xl border mb-6"

/>


<div className="bg-white rounded-xl shadow-lg p-5">

<table className="w-full">

<thead>

<tr className="border-b h-12">

<th>ID</th>
<th>Employee</th>
<th>Leave Type</th>
<th>Date</th>
<th>Status</th>
<th>Actions</th>

</tr>

</thead>

<tbody>

{

filteredLeaves.map((leave)=>(

<tr
key={leave.id}
className="border-b h-14 text-center"
>

<td>{leave.id}</td>

<td>{leave.employee}</td>

<td>{leave.type}</td>

<td>{leave.date}</td>

<td>

<span
className={`px-3 py-2 rounded-lg

${
leave.status==="Approved"
?"bg-green-100 text-green-700"

:leave.status==="Rejected"
?"bg-red-100 text-red-700"

:"bg-yellow-100 text-yellow-700"
}

`}
>

{leave.status}

</span>

</td>

<td>

<div className="flex justify-center gap-2">

<button

onClick={()=>
approveLeave(leave.id)
}

className="bg-green-600 px-3 py-1 rounded-lg text-white"

>

Approve

</button>


<button

onClick={()=>
rejectLeave(leave.id)
}

className="bg-red-600 px-3 py-1 rounded-lg text-white"

>

Reject

</button>

</div>

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

export default Leave;