function DashboardCards({

employees=[],
tasks=[],
leaves=[]

}){

const totalEmployees=
employees.length;


const departments=
new Set(

employees.map(
emp=>emp.department
)

).size;


const attendance=
employees.length

?

Math.round(

(
employees.length*92
)
/
employees.length

)

:

0;


const pendingLeaves=
leaves.length;

const totalTasks=
tasks.length;



const cards=[

{
title:"Employees",
value:totalEmployees,
icon:"👨‍💼",
bg:"bg-blue-100"
},

{
title:"Departments",
value:departments,
icon:"🏢",
bg:"bg-green-100"
},

{
title:"Attendance",
value:attendance+"%",
icon:"📅",
bg:"bg-purple-100"
},

{
title:"Pending Leave",
value:pendingLeaves,
icon:"🌴",
bg:"bg-orange-100"
},

{
title:"Tasks",
value:totalTasks,
icon:"✅",
bg:"bg-indigo-100"
}

];



return(

<div
className="
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-5
gap-6
mb-10
"
>

{

cards.map((card,index)=>(

<div

key={index}

className="
bg-white
rounded-[28px]
p-6
border
border-gray-100
shadow-sm
hover:shadow-lg
transition-all
duration-300
hover:-translate-y-1
"

>

<div
className="
flex
justify-between
items-center
"
>

<div>

<p
className="
text-gray-500
text-sm
font-medium
mb-2
"
>

{card.title}

</p>


<h1
className="
text-4xl
font-bold
text-gray-800
"
>

{card.value}

</h1>

</div>



<div

className={`${card.bg}
w-14
h-14
rounded-2xl
flex
justify-center
items-center
text-2xl
shadow-sm`}

>

{card.icon}

</div>


</div>

</div>

))

}

</div>

);

}

export default DashboardCards;