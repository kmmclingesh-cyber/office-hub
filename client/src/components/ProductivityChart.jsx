import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend
);

function ProductivityChart(){

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
label:"Productivity %",
data:[65,78,75,90,82,95]
}

]

};

return(

<div className="bg-white p-5 rounded-xl shadow-lg">

<h2 className="text-xl font-bold mb-4">

Productivity Analytics 📈

</h2>

<Line data={data}/>

</div>

)

}

export default ProductivityChart;
