import { useState, useEffect } from "react";

function TimeTracking() {

const [clockedIn,setClockedIn]=useState(false);

const [seconds,setSeconds]=useState(0);

const [logs,setLogs]=useState([]);

useEffect(()=>{

let interval=null;

if(clockedIn){

interval=setInterval(()=>{

setSeconds(prev=>prev+1);

},1000);

}

return()=>clearInterval(interval);

},[clockedIn]);

function formatTime(totalSeconds){

const hrs=
String(Math.floor(totalSeconds/3600))
.padStart(2,"0");

const mins=
String(Math.floor((totalSeconds%3600)/60))
.padStart(2,"0");

const secs=
String(totalSeconds%60)
.padStart(2,"0");

return `${hrs}:${mins}:${secs}`;

}

function handleClockIn(){

const currentTime=
new Date().toLocaleTimeString();

setClockedIn(true);

setLogs([

...logs,

{
action:"Clock In",
time:currentTime
}

]);

}

function handleClockOut(){

const currentTime=
new Date().toLocaleTimeString();

setClockedIn(false);

setLogs([

...logs,

{
action:"Clock Out",
time:currentTime
}

]);

}

return(

<div>

<h1 className="text-3xl font-bold">

Time Tracking ⏱

</h1>

<p className="text-gray-500 mb-8">

Track work hours

</p>


<div className="bg-white rounded-xl shadow-lg p-8 mb-8">

<h2 className="text-xl font-bold mb-4">

Live Timer

</h2>

<div className="text-5xl font-bold">

{formatTime(seconds)}

</div>

<div className="flex gap-4 mt-6">

<button
onClick={handleClockIn}
disabled={clockedIn}
className="bg-green-600 text-white px-5 py-3 rounded-xl disabled:bg-gray-400"
>

Clock In

</button>


<button
onClick={handleClockOut}
disabled={!clockedIn}
className="bg-red-600 text-white px-5 py-3 rounded-xl disabled:bg-gray-400"
>

Clock Out

</button>

</div>

</div>

<div className="bg-white rounded-xl shadow-lg p-5">

<h2 className="font-bold text-xl mb-4">

Work Logs

</h2>

<table className="w-full">

<thead>

<tr className="border-b h-12">

<th>Action</th>
<th>Time</th>

</tr>

</thead>

<tbody>

{

logs.map((log,index)=>(

<tr
key={index}
className="border-b h-12 text-center"
>

<td>{log.action}</td>

<td>{log.time}</td>

</tr>

))

}

</tbody>

</table>

</div>

</div>

)

}

export default TimeTracking;