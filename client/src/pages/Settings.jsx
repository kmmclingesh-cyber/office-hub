import { useState } from "react";

function Settings(){

const [settings,setSettings]=useState({

name:"Lingesh",
email:"admin@huboffice.in",
company:"Office.HuB",
theme:"Light"

});

function handleChange(e){

setSettings({

...settings,
[e.target.name]:e.target.value

});

}

function saveSettings(){

alert("Settings Saved Successfully ✅");

}

return(

<div>

<div className="bg-white rounded-xl shadow-lg p-8">

<h2 className="text-2xl font-bold mb-6">

Settings ⚙️

</h2>

<div className="space-y-5">

<input
name="name"
value={settings.name}
onChange={handleChange}
placeholder="Name"
className="w-full p-3 border rounded-xl"
/>

<input
name="email"
value={settings.email}
onChange={handleChange}
placeholder="Email"
className="w-full p-3 border rounded-xl"
/>

<input
name="company"
value={settings.company}
onChange={handleChange}
placeholder="Company"
className="w-full p-3 border rounded-xl"
/>

<select
name="theme"
value={settings.theme}
onChange={handleChange}
className="w-full p-3 border rounded-xl"
>

<option>Light</option>
<option>Dark</option>

</select>

<button
onClick={saveSettings}
className="bg-blue-600 text-white px-5 py-3 rounded-xl"
>

Save Settings

</button>

</div>

</div>

</div>

)

}

export default Settings;