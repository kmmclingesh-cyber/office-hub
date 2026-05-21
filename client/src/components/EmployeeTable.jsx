function EmployeeTable() {

const employees=[

{
id:"EMP001",
name:"Lingesh",
department:"Development",
status:"Active"
},

{
id:"EMP002",
name:"John",
department:"HR",
status:"Active"
},

{
id:"EMP003",
name:"David",
department:"Marketing",
status:"Leave"
}

]

return(

<div className="bg-white p-5 rounded-xl shadow-lg mt-8">

<h2 className="text-xl font-bold mb-4">

Employees

</h2>

<table className="w-full">

<thead>

<tr className="border-b">

<th>ID</th>
<th>Name</th>
<th>Department</th>
<th>Status</th>

</tr>

</thead>

<tbody>

{
employees.map((emp)=>(
<tr
key={emp.id}
className="text-center border-b h-12"
>

<td>{emp.id}</td>

<td>{emp.name}</td>

<td>{emp.department}</td>

<td>{emp.status}</td>

</tr>
))
}

</tbody>

</table>

</div>

)

}

export default EmployeeTable