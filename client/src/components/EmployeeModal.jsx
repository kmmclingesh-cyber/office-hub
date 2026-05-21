import { useState } from "react";

function EmployeeModal({
  closeModal,
  addEmployee
}) {

const [employee,setEmployee]=
useState({

id:"",
name:"",
department:"",
email:""

});

function handleChange(e){

setEmployee({

...employee,
[e.target.name]:
e.target.value

});

}

function handleSubmit(){

if(

!employee.id ||
!employee.name ||
!employee.department ||
!employee.email

){

alert(
"Fill all fields"
);

return;

}

addEmployee(employee);

}

return(

<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">

<div className="bg-white w-[500px] rounded-2xl p-8">

<h2 className="text-3xl font-bold mb-8">

Add Employee 👥

</h2>

<div className="space-y-5">

<input
name="id"
placeholder="Employee ID"
value={employee.id}
onChange={handleChange}
className="w-full border p-4 rounded-xl"
/>

<input
name="name"
placeholder="Employee Name"
value={employee.name}
onChange={handleChange}
className="w-full border p-4 rounded-xl"
/>

<input
name="department"
placeholder="Department"
value={employee.department}
onChange={handleChange}
className="w-full border p-4 rounded-xl"
/>

<input
name="email"
placeholder="Email"
value={employee.email}
onChange={handleChange}
className="w-full border p-4 rounded-xl"
/>

<div className="flex justify-end gap-3">

<button
onClick={closeModal}
className="border px-5 py-3 rounded-xl"
>

Cancel

</button>

<button
onClick={handleSubmit}
className="bg-blue-600 text-white px-5 py-3 rounded-xl"
>

Save

</button>

</div>

</div>

</div>

</div>

)

}

export default EmployeeModal;