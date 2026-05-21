import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarPage(){

const [date,setDate]=useState(new Date());

const events=[

{
title:"Team Meeting",
date:"2025-09-15"
},

{
title:"Homepage Deadline",
date:"2025-09-18"
},

{
title:"HR Review",
date:"2025-09-20"
}

];

return(

<div>

<div className="grid grid-cols-3 gap-6">

<div className="col-span-2 bg-white rounded-xl p-6 shadow-lg">

<h2 className="text-2xl font-bold mb-6">

Calendar 📅

</h2>

<Calendar

onChange={setDate}
value={date}

/>

<p className="mt-5 text-gray-500">

Selected Date:

{date.toDateString()}

</p>

</div>

<div className="bg-white rounded-xl p-6 shadow-lg">

<h2 className="text-xl font-bold mb-5">

Upcoming Events 🔔

</h2>

<div className="space-y-4">

{

events.map((event,index)=>(

<div
key={index}
className="border-b pb-3"
>

<p className="font-medium">

{event.title}

</p>

<p className="text-gray-500">

{event.date}

</p>

</div>

))

}

</div>

</div>

</div>

</div>

)

}

export default CalendarPage;