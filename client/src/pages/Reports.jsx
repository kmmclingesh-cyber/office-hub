import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);

function Reports(){

const data={

labels:[
"Mon",
"Tue",
"Wed",
"Thu",
"Fri",
"Sat"
],

datasets:[

{
label:"Completed Tasks",
data:[4,7,5,9,6,10]
},

{
label:"Worked Hours",
data:[6,8,7,9,8,10]
}

]

};

return(

<div>

<h1 className="text-3xl font-bold">

Reports 📊

</h1>

<p className="text-gray-500 mb-8">

Employee analytics and productivity

</p>


<div className="grid grid-cols-3 gap-6 mb-8">

<div className="bg-white p-5 rounded-xl shadow-lg">

<h3 className="text-gray-500">
Total Employees
</h3>

<h1 className="text-3xl font-bold">

124

</h1>

</div>


<div className="bg-white p-5 rounded-xl shadow-lg">

<h3 className="text-gray-500">
Tasks Completed
</h3>

<h1 className="text-3xl font-bold">

87

</h1>

</div>


<div className="bg-white p-5 rounded-xl shadow-lg">

<h3 className="text-gray-500">
Avg Productivity
</h3>

<h1 className="text-3xl font-bold">

91%

</h1>

</div>

</div>


<div className="bg-white rounded-xl shadow-lg p-6">

<h2 className="font-bold text-xl mb-6">

Weekly Performance

</h2>

<Bar data={data}/>

</div>

</div>

)

}

export default Reports;