function TaskList(){

const tasks=[

{
title:"Homepage Design",
status:"In Progress"
},

{
title:"Employee Module",
status:"Completed"
},

{
title:"Attendance API",
status:"Pending"
}

]

return(

<div className="bg-white p-5 rounded-xl shadow-lg">

<h2 className="text-xl font-bold mb-4">

Recent Tasks

</h2>

{
tasks.map((task,index)=>(

<div
key={index}
className="border-b py-3"
>

<h3 className="font-semibold">
{task.title}
</h3>

<p className="text-gray-500">
{task.status}
</p>

</div>

))
}

</div>

)

}

export default TaskList