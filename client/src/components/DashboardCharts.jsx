import {

Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
ArcElement,
Tooltip,
Legend

} from "chart.js";

import {

Bar,
Pie

} from "react-chartjs-2";


ChartJS.register(

CategoryScale,
LinearScale,
BarElement,
ArcElement,
Tooltip,
Legend

);


function DashboardCharts({

employees=[]

}){


// Department data

const departments={};

employees.forEach(emp=>{

departments[emp.department]=

(departments[emp.department] || 0)+1;

});



// Bar Chart

const barData={

labels:Object.keys(
departments
),

datasets:[{

label:"Employees",

data:Object.values(
departments
)

}]

};


// Pie Chart

const pieData={

labels:Object.keys(
departments
),

datasets:[{

data:Object.values(
departments
)

}]

};


return(

<div
className="
grid
grid-cols-1
lg:grid-cols-2
gap-6
mt-8
"
>

<div
className="
bg-white
rounded-2xl
shadow-lg
p-6
"
>

<h2
className="
font-bold
mb-5
"
>

Department Distribution

</h2>

<Bar
data={barData}
/>

</div>


<div
className="
bg-white
rounded-2xl
shadow-lg
p-6
"
>

<h2
className="
font-bold
mb-5
"
>

Department Share

</h2>

<Pie
data={pieData}
/>

</div>

</div>

);

}

export default DashboardCharts;