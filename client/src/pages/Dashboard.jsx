import { useEffect, useState } from "react";

import DashboardCards from "../components/DashboardCards";
import DashboardCharts from "../components/DashboardCharts";

import EmployeeTable from "../components/EmployeeTable";
import ActivityFeed from "../components/ActivityFeed";
import ProductivityChart from "../components/ProductivityChart";
import TaskList from "../components/TaskList";

import {
getEmployees
}
from "../services/googleSheetService";


function Dashboard(){

const [employees,setEmployees]=
useState([]);

const [loading,setLoading]=
useState(false);


useEffect(()=>{

loadData();

},[]);



const loadData=
async()=>{

try{

setLoading(true);

const data=
await getEmployees();

setEmployees(data);

}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}

};



return(

<div className="space-y-8">

{/* Dashboard Stats */}

<DashboardCards

employees={employees}
tasks={[1,2,3,4]}
leaves={[1,2]}

/>




{/* Charts */}

<div
className="
grid
grid-cols-1
xl:grid-cols-2
gap-6
"
>

<div
className="
bg-white
rounded-3xl
shadow-sm
border
p-6
"
>

<h2
className="
text-lg
font-bold
mb-5
"
>

Department Analytics 📈

</h2>

<DashboardCharts
employees={employees}
/>

</div>



<div
className="
bg-white
rounded-3xl
shadow-sm
border
p-6
"
>

<h2
className="
text-lg
font-bold
mb-5
"
>

Productivity Analytics 📊

</h2>

<ProductivityChart/>

</div>

</div>





{/* Employee + Activity */}

<div
className="
grid
grid-cols-1
xl:grid-cols-3
gap-6
"
>


<div
className="
xl:col-span-2
bg-white
rounded-3xl
shadow-sm
border
p-6
"
>

<h2
className="
text-lg
font-bold
mb-5
"
>

Employees

</h2>

<EmployeeTable/>

</div>



<div
className="
bg-white
rounded-3xl
shadow-sm
border
p-6
"
>

<h2
className="
text-lg
font-bold
mb-5
"
>

Recent Activity

</h2>

<ActivityFeed/>

</div>

</div>





{/* Task Section */}

<div
className="
bg-white
rounded-3xl
shadow-sm
border
p-6
"
>

<h2
className="
text-lg
font-bold
mb-5
"
>

Tasks Overview

</h2>

<TaskList/>

</div>





{/* Loading */}

{

loading && (

<div
className="
fixed
inset-0
bg-white/70
backdrop-blur-sm
flex
justify-center
items-center
z-50
"
>

<div
className="
bg-white
rounded-3xl
p-8
shadow-xl
text-center
"
>

<div
className="
w-16
h-16
border-4
border-blue-600
border-t-transparent
rounded-full
animate-spin
mx-auto
mb-4
"
/>

<p
className="
font-semibold
text-gray-700
"
>

Loading Dashboard...

</p>

</div>

</div>

)

}


</div>

);

}

export default Dashboard;