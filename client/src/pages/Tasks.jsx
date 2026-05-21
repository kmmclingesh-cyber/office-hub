import { useState } from "react";
import TaskModal from "../components/TaskModal";

function Tasks(){

const [showModal,setShowModal]=useState(false);

const [tasks,setTasks]=useState([

{
id:"TASK001",
title:"Homepage Design",
employee:"Lingesh",
priority:"High",
status:"In Progress",
dueDate:"2025-09-15"
}

]);

function addTask(newTask){

setTasks([

...tasks,
newTask

]);

}

return(

<div>

<div className="flex justify-between items-center mb-8">

<div>

<h1 className="text-3xl font-bold">

Tasks 💼

</h1>

<p className="text-gray-500">

Manage project tasks

</p>

</div>

<button
onClick={()=>setShowModal(true)}
className="bg-blue-600 text-white px-5 py-3 rounded-xl"
>

+ Add Task

</button>

</div>


<div className="bg-white rounded-xl shadow-lg p-5">

<table className="w-full">

<thead>

<tr className="border-b h-12">

<th>ID</th>
<th>Task</th>
<th>Employee</th>
<th>Priority</th>
<th>Status</th>
<th>Due Date</th>

</tr>

</thead>

<tbody>

{
tasks.map((task)=>(

<tr
key={task.id}
className="border-b h-14 text-center"
>

<td>{task.id}</td>
<td>{task.title}</td>
<td>{task.employee}</td>
<td>{task.priority}</td>
<td>{task.status}</td>
<td>{task.dueDate}</td>

</tr>

))
}

</tbody>

</table>

</div>

{
showModal &&

<TaskModal
closeModal={()=>setShowModal(false)}
addTask={addTask}
/>

}

</div>

)

}

export default Tasks