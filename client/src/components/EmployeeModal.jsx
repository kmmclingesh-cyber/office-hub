import { useState } from "react";

function EmployeeModal({

closeModal,
addEmployee

}) {

const [formData,setFormData]=
useState({

id:"",
name:"",
department:"",
email:"",
phone:"",
role:"",
joiningDate:"",
photo:""

});


const handleChange=(e)=>{

setFormData({

...formData,
[e.target.name]:
e.target.value

});

};


const handleSubmit=(e)=>{

e.preventDefault();

addEmployee(formData);

};


return(

<div
className="
fixed
inset-0
bg-black/50
flex
justify-center
items-center
z-50
"
>

<div
className="
bg-white
w-[600px]
rounded-2xl
p-8
shadow-2xl
"
>

<h2
className="
text-3xl
font-bold
mb-6
"
>

Add Employee 👨‍💼

</h2>


<form
onSubmit={handleSubmit}
className="
grid
grid-cols-2
gap-4
"
>

<input
name="id"
placeholder="Employee ID"
onChange={handleChange}
className="border p-3 rounded-xl"
/>

<input
name="name"
placeholder="Name"
onChange={handleChange}
className="border p-3 rounded-xl"
/>

<input
name="department"
placeholder="Department"
onChange={handleChange}
className="border p-3 rounded-xl"
/>

<input
name="email"
placeholder="Email"
onChange={handleChange}
className="border p-3 rounded-xl"
/>

<input
name="phone"
placeholder="Phone"
onChange={handleChange}
className="border p-3 rounded-xl"
/>

<input
name="role"
placeholder="Role"
onChange={handleChange}
className="border p-3 rounded-xl"
/>

<input
type="date"
name="joiningDate"
onChange={handleChange}
className="border p-3 rounded-xl"
/>

<input
name="photo"
placeholder="Photo URL"
onChange={handleChange}
className="border p-3 rounded-xl"
/>


<div
className="
col-span-2
flex
justify-end
gap-4
mt-4
"
>

<button
type="button"
onClick={closeModal}
className="
px-5
py-3
rounded-xl
border
"
>

Cancel

</button>


<button
type="submit"
className="
bg-blue-600
text-white
px-5
py-3
rounded-xl
"
>

Save

</button>

</div>

</form>

</div>

</div>

);

}

export default EmployeeModal;