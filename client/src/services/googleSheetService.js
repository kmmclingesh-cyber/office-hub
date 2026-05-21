import axios from "axios";

const API=
"https://script.google.com/macros/s/AKfycbx-i1tncKvKi4Q_G4p0EFUejF15J0B6fBO9C3uz0WEe6pXtkBDBo6stzC9aFg_b0wnn/exec";


export const getEmployees=
async()=>{

const response=
await axios.get(API);

return response.data;

};


export const addEmployee=
async(data)=>{

await axios.get(API,{

params:{

action:"add",

ID:data.ID,
Name:data.Name,
Department:data.Department,
Email:data.Email

}

});

};