import { useState, useEffect } from "react";

import EmployeeModal from "../components/EmployeeModal";
import EmployeeDetailsModal from "../components/EmployeeDetailsModal";

import { useNotification } from "../context/NotificationContext";

import {

getEmployees,
addEmployee as saveEmployeeToSheet,
deleteEmployee as removeFromSheet,
editEmployee as updateSheetEmployee

}
from "../services/googleSheetService";


function Employees() {

const [showModal,setShowModal] =
useState(false);

const [employees,setEmployees] =
useState([]);

const [search,setSearch] =
useState("");

const [loading,setLoading] =
useState(false);

const [selectedEmployee,
setSelectedEmployee]
=
useState(null);

const { addNotification } =
useNotification();


// Current User

const user =

JSON.parse(

sessionStorage.getItem(
"user"
)

);

const isAdmin =

user?.role==="Admin";



useEffect(()=>{

loadEmployees();

},[]);



// =========================
// Load Employees
// =========================

const loadEmployees =
async()=>{

try{

setLoading(true);

const data =
await getEmployees();


const formattedData=

data.map(emp=>({

id:
emp.ID || "",

name:
emp.Name || "",

department:
emp.Department || "",

email:
emp.Email || "",

phone:
emp.Phone || "",

role:
emp.Role || "",

joiningDate:
emp.JoiningDate || "",

photo:
emp.Photo || ""

}));


setEmployees(
formattedData
);

}
catch(error){

console.log(
error
);

alert(
"Failed to load employees ❌"
);

}
finally{

setLoading(false);

}

};



// =========================
// Save Employee
// =========================

const saveEmployee =
async(newEmployee)=>{

try{

setLoading(true);

await saveEmployeeToSheet({

ID:newEmployee.id,
Name:newEmployee.name,
Department:newEmployee.department,
Email:newEmployee.email,
Phone:newEmployee.phone,
Role:newEmployee.role,
JoiningDate:newEmployee.joiningDate,
Photo:newEmployee.photo

});

await loadEmployees();

setShowModal(false);

addNotification(

`${newEmployee.name} joined Office.HuB 👨‍💼`

);

alert(
"Employee Added ✅"
);

}
catch(error){

console.log(
error
);

alert(
"Save failed ❌"
);

}
finally{

setLoading(false);

}

};




// =========================
// Delete Employee
// =========================

const deleteEmployee=
async(id)=>{

if(

!window.confirm(
"Delete employee?"
)

)

return;


try{

setLoading(true);

await removeFromSheet(
id
);

await loadEmployees();

addNotification(

"Employee deleted 🗑️"

);

alert(
"Deleted Successfully"
);

}
catch(error){

console.log(
error
);

alert(
"Delete failed ❌"
);

}
finally{

setLoading(false);

}

};




// =========================
// Edit Employee
// =========================

const editEmployee=
async(emp)=>{

const updatedName=

prompt(

"Enter new name",

emp.name

);

if(!updatedName)
return;


try{

setLoading(true);

await updateSheetEmployee({

ID:emp.id,
Name:updatedName,
Department:emp.department,
Email:emp.email,
Phone:emp.phone,
Role:emp.role,
JoiningDate:emp.joiningDate,
Photo:emp.photo

});

await loadEmployees();

addNotification(

"Employee updated ✏️"

);

alert(
"Updated Successfully"
);

}
catch(error){

console.log(
error
);

alert(
"Update failed ❌"
);

}
finally{

setLoading(false);

}

};




// =========================
// Search
// =========================

const filteredEmployees =

employees.filter(emp=>

emp.name
?.toLowerCase()
.includes(
search.toLowerCase()
)

);




return(

<div className="relative">


{/* Loading */}

{

loading && (

<div
className="
fixed
inset-0
bg-black/40
flex
justify-center
items-center
z-50
"
>

<div
className="
bg-white
rounded-2xl
shadow-xl
p-8
text-center
"
>

<div
className="
animate-spin
h-14
w-14
border-4
border-blue-600
border-t-transparent
rounded-full
mx-auto
mb-4
"
/>

<p>

Loading...

</p>

</div>

</div>

)

}



{/* Top Controls */}

<div
className="
flex
items-center
gap-4
mb-8
"
>

<input
type="text"
placeholder="Search employee..."
value={search}
onChange={(e)=>

setSearch(
e.target.value
)

}

className="
flex-1
p-4
border
rounded-xl
"
/>


<button

onClick={
loadEmployees
}

className="
bg-white
p-4
rounded-xl
shadow
"

>

🔄

</button>


{

isAdmin && (

<button

onClick={()=>

setShowModal(
true
)

}

className="
bg-blue-600
text-white
px-6
py-4
rounded-xl
"

>

+ Add Employee

</button>

)

}

</div>



{/* Employee Table */}

<div
className="
bg-white
rounded-2xl
shadow-lg
p-6
"
>

<table className="w-full">

<thead>

<tr
className="
border-b
h-14
"
>

<th>ID</th>
<th>Name</th>
<th>Department</th>
<th>Email</th>
<th>Actions</th>

</tr>

</thead>


<tbody>

{

filteredEmployees.length>0

?

filteredEmployees.map(emp=>(

<tr
key={emp.id}
className="
border-b
h-16
hover:bg-gray-50
"
>

<td>{emp.id}</td>

<td>{emp.name}</td>

<td>{emp.department}</td>

<td>{emp.email}</td>


<td>

<div className="flex gap-3">

<button

onClick={()=>

setSelectedEmployee(
emp
)

}

className="
bg-green-600
text-white
px-4
py-2
rounded-lg
"

>

View

</button>


{

isAdmin && (

<>

<button

onClick={()=>

editEmployee(
emp
)

}

className="
bg-yellow-500
text-white
px-4
py-2
rounded-lg
"

>

Edit

</button>


<button

onClick={()=>

deleteEmployee(
emp.id
)

}

className="
bg-red-600
text-white
px-4
py-2
rounded-lg
"

>

Delete

</button>

</>

)

}

</div>

</td>

</tr>

))

:

(

<tr>

<td
colSpan="5"
className="
text-center
py-10
text-gray-500
"
>

No employees found 😔

</td>

</tr>

)

}

</tbody>

</table>

</div>



{/* Employee Details */}

{

selectedEmployee && (

<EmployeeDetailsModal

employee={
selectedEmployee
}

closeModal={()=>

setSelectedEmployee(
null
)

}

/>

)

}



{/* Add Employee */}

{

showModal && (

<EmployeeModal

closeModal={()=>

setShowModal(
false
)

}

addEmployee={
saveEmployee
}

/>

)

}

</div>

);

}

export default Employees;