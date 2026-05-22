const API =
"https://script.google.com/macros/s/AKfycbzyX2jAbgDrzbRo-Y4QgTkk_kNwX_w-9JrrVy_BA7Kq7g6GmLSbvUTrMBr8VOghhw0m/exec";


// =========================
// GET
// =========================

export const getEmployees = async()=>{

try{

const response =
await fetch(API);

return await response.json();

}
catch(error){

console.log(
"GET ERROR:",
error
);

return [];

}

};


// =========================
// ADD
// =========================

export const addEmployee = async(data)=>{

try{

const formData =
new FormData();

formData.append(
"payload",
JSON.stringify({

action:"add",
...data

})
);

const response =
await fetch(API,{

method:"POST",

body:formData

});

return await response.json();

}
catch(error){

console.log(
"ADD ERROR:",
error
);

throw error;

}

};




// =========================
// DELETE
// =========================

export const deleteEmployee =
async(id)=>{

const formData =
new FormData();

formData.append(
"payload",
JSON.stringify({

action:"delete",
ID:id

})
);

const response =
await fetch(API,{

method:"POST",

body:formData

});

return await response.json();

};




// =========================
// EDIT
// =========================

export const editEmployee =
async(data)=>{

const formData =
new FormData();

formData.append(
"payload",
JSON.stringify({

action:"edit",
...data

})
);

const response =
await fetch(API,{

method:"POST",

body:formData

});

return await response.json();

};