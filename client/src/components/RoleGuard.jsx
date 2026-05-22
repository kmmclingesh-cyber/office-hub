function RoleGuard({

children,
allowedRoles

}){

const user=

JSON.parse(

sessionStorage.getItem(
"user"
)

);

if(

!user ||

!allowedRoles.includes(
user.role
)

){

return(

<div
className="
flex
justify-center
items-center
h-[70vh]
"
>

<h1
className="
text-red-500
text-3xl
font-bold
"
>

🚫 Access Denied

</h1>

</div>

);

}

return children;

}

export default RoleGuard;