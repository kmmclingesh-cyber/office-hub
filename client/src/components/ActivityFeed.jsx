function ActivityFeed(){

const activities=[

{
message:"Lingesh completed Homepage Design",
time:"2 mins ago"
},

{
message:"John clocked in",
time:"10 mins ago"
},

{
message:"New employee added",
time:"20 mins ago"
},

{
message:"Attendance updated",
time:"30 mins ago"
}

];

return(

<div className="bg-white rounded-xl shadow-lg p-5">

<h2 className="text-xl font-bold mb-5">

Recent Activity 🔔

</h2>

<div className="space-y-4">

{

activities.map((item,index)=>(

<div
key={index}
className="border-b pb-3"
>

<p className="font-medium">

{item.message}

</p>

<p className="text-gray-500 text-sm">

{item.time}

</p>

</div>

))

}

</div>

</div>

)

}

export default ActivityFeed