import { useState } from "react";

function TaskModal({closeModal,addTask}){

const [formData,setFormData]=useState({

id:"",
title:"",
employee:"",
priority:"Medium",
status:"Pending",
dueDate:""

});

function handleChange(e){

setFormData({

...formData,
[e.target.name]:e.target.value

});

}

function handleSubmit(){

addTask(formData);

closeModal();

}

return(

<div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

<div className="bg-white w-[500px] p-6 rounded-xl">

<h2 className="text-2xl font-bold mb-6">

Add Task 💼

</h2>

<div className="space-y-4">

<input
name="id"
placeholder="Task ID"
onChange={handleChange}
className="w-full border p-3 rounded-xl"
/>

<input
name="title"
placeholder="Task Title"
onChange={handleChange}
className="w-full border p-3 rounded-xl"
/>

<input
name="employee"
placeholder="Assign Employee"
onChange={handleChange}
className="w-full border p-3 rounded-xl"
/>

<select
name="priority"
onChange={handleChange}
className="w-full border p-3 rounded-xl"
>

<option>High</option>
<option>Medium</option>
<option>Low</option>

</select>

<select
name="status"
onChange={handleChange}
className="w-full border p-3 rounded-xl"
>

<option>Pending</option>
<option>In Progress</option>
<option>Completed</option>

</select>

<input
type="date"
name="dueDate"
onChange={handleChange}
className="w-full border p-3 rounded-xl"
/>

</div>

<div className="flex justify-end gap-3 mt-6">

<button
onClick={closeModal}
className="px-4 py-2 border rounded-xl"
>

Cancel

</button>

<button
onClick={handleSubmit}
className="bg-blue-600 text-white px-4 py-2 rounded-xl"
>

Save

</button>

</div>

</div>

</div>

)

}

export default TaskModal